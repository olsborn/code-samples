'use client';
import classes from './GeneratedImage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import modelsJSON, { type ModelItem } from '@/datajson/models.list';

const models = (modelsJSON as ModelItem[])
  .filter((m) => !m.disabled)
  .sort((m1, m2) => m1.model.localeCompare(m2.model));
const grouped = models.reduce((acc, m) => {
  const provider = m.model.split('/')[0];
  if (!acc[provider]) acc[provider] = [];
  acc[provider].push(m);
  return acc;
}, {} as Record<string, ModelItem[]>);

export default function GeneratedImage({
  phrase,
  aspectRatio,
  setrefreshGlightBox,
}: {
  phrase: string;
  aspectRatio: string;
  setrefreshGlightBox: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [model, setModel] = useState(models[0]);

  const [imgState, setImgState] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [elapsedMs, setElapsedMs] = useState(0);
  const [globalError, setGlobalError] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  let abortController: AbortController | null = null;

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleGenerate = async () => {
    setElapsedMs(0);
    clearTimer();
    timerRef.current = setInterval(() => setElapsedMs((v) => v + 10), 10);

    setImgState('loading');

    const key =
      'replicate:' +
      encodeURIComponent(JSON.stringify({ prompt: phrase, model: model.model, aspectRatio }));
    const data = JSON.parse(localStorage.getItem(key) || 'null');

    if (data?.url && data.url.trim() !== '' && data?.ts > Date.now() - 20 * 60 * 1000) {
      clearTimer();
      setImgState('loaded');
      setImageUrl(data.url);
      setrefreshGlightBox((v) => v + 1);
      return;
    } else if (data) {
      localStorage.removeItem(key);
    }

    // Utwórz nowy AbortController dla tego requesta
    abortController?.abort();
    abortController = new AbortController();

    let res;

    try {
      res = await fetch('/api/replicate', {
        method: 'POST',
        body: JSON.stringify({ prompt: phrase, model: model.model, aspectRatio }),
        signal: abortController.signal,
      });
    } catch (err) {
      if ((err as Error & { name?: string }).name === 'AbortError') {
        clearTimer();
        setImgState('loaded');
        //console.log(err);
        //setImgState('error');
        //setGlobalError('Request aborted');
        return;
      }
      clearTimer();
      setImgState('error');
      setGlobalError('Network error');
      return;
    }

    if (!res.ok) {
      clearTimer();
      // Rozróżnienie błędu autoryzacji
      try {
        const errorData = await res.json();
        setGlobalError(errorData.error);
        return;
      } catch {}
      setImgState('error');
      return;
    } else {
      const data = await res.json();
      if (data?.image) {
        clearTimer();
        setImgState('loaded');
        setrefreshGlightBox((v) => v + 1);
        let url = '';

        if (Array.isArray(data.image.output) && data.image.output.length > 0) {
          url = data.image.output[0];
        } else if (typeof data.image.output === 'string') {
          url = data.image.output;
        } else if (typeof data.image === 'string') {
          url = data.image;
        }

        if (!url) {
          setImgState('error');
          return;
        } else {
          localStorage.setItem(key, JSON.stringify({ ts: Date.now(), url }));
          setImageUrl(url);
        }
      } else {
        clearTimer();
        setImgState('error');
      }
    }
  };

  useEffect(() => {
    return () => {
      clearTimer();
      abortController?.abort();
    };
  }, []);

  useEffect(() => {
    setModel(models[Math.floor(Math.random() * models.length)]);
  }, []);

  useEffect(() => {
    async function fetchData() {
      await handleGenerate();
    }
    if (phrase.trim() && imgState !== 'loading') {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrase, aspectRatio, model.model]);

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = models.find((m) => m.model === e.target.value);
    if (selected) {
      setModel(selected);
    }
  };

  // Rzucenie globalnego błędu autoryzacji w renderze
  if (globalError.trim() !== '') {
    throw new Error(globalError);
  }

  return (
    <div className={classes.imageCard}>
      {/* Model Selector */}
      <div className={classes.modelSelector}>
        <Image
          src={`/icons${model.icon}`}
          alt={model.model}
          width={20}
          height={20}
          className={classes.modelIcon}
        />
        <select
          value={model.model}
          onChange={handleModelChange}
          className={classes.modelSelect}
          disabled={imgState === 'loading'}
        >
          {Object.entries(grouped).map(([provider, models]) => (
            <optgroup key={provider} label={provider}>
              {models.map((m) => (
                <option key={m.model} value={m.model}>
                  {m.model.split('/')[1]}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Image Container */}
      <div
        className={classes.imageContainer}
        style={{ aspectRatio: aspectRatio.replace(':', '/') }}
      >
        {!phrase.trim() && (
          <div className={classes.placeholder}>
            <div className={classes.placeholderIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div className={classes.placeholderText}>Ready to generate</div>
          </div>
        )}

        {phrase.trim() && imgState === 'loading' && (
          <div className={classes.loading}>
            <div className={classes.spinner}>
              <div className={classes.spinnerRing}></div>
              <div className={classes.spinnerRing}></div>
              <div className={classes.spinnerRing}></div>
            </div>
            <div className={classes.loadingText}>{(elapsedMs * 0.001).toFixed(1)}s</div>
          </div>
        )}

        {phrase.trim() && imgState === 'error' && (
          <div className={classes.error}>
            <div className={classes.errorIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div className={classes.errorText}>Failed to generate</div>
            <button onClick={handleGenerate} className={classes.retryButton}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              Retry
            </button>
          </div>
        )}

        {phrase.trim() && imgState === 'loaded' && imageUrl && (
          <Link
            href={imageUrl}
            className={`glightbox ${classes.imageLink}`}
            title={`${model.model} :: ${phrase}`}
          >
            <Image
              src={imageUrl}
              alt={phrase}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={classes.image}
            />
            <div className={classes.imageOverlay}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
