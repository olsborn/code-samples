'use client';
import { useState } from 'react';
import classes from './SystemTextInput.module.css';

export default function SystemTextInput({
  phrase,
  setPhrase,
  aspectRatio,
  setAspectRatio,
  imagesCount,
  setImagesCount,
}: {
  phrase: string;
  imagesCount: number;
  setPhrase: (phrase: string) => void;
  aspectRatio: string;
  setAspectRatio: (ratio: string) => void;
  setImagesCount: (count: number) => void;
}) {
  const [val, setVal] = useState(phrase);

  const savePhrase = () => {
    if (setPhrase) {
      setPhrase(val);
    }
  };

  const aspectRatios = [
    { value: '1:1', icon: '□' },
    { value: '4:3', icon: '▭' },
    { value: '3:4', icon: '▯' },
    { value: '16:9', icon: '▬' },
    { value: '9:16', icon: '▮' },
  ];

  return (
    <div className={classes.inputContainer}>
      <textarea
        className={classes.textarea}
        name="phrase"
        id="system-text-input"
        placeholder="Describe the image you want to generate..."
        value={val}
        onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = 'auto';
          target.style.height = Math.min(target.scrollHeight, 200) + 'px';
          setVal(target.value);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (e.key === 'Enter' && !e.shiftKey && val.trim() !== '') {
            e.preventDefault();
            savePhrase();
          }
        }}
        onBlur={(e) => {
          e.target.value = e.target.value.trim() === '' ? phrase : e.target.value;
        }}
        maxLength={1000}
      />

      <div className={classes.controls}>
        {/* Image Count Controls */}
        <div className={classes.controlGroup}>
          <div className={classes.controlLabel}>Images</div>
          <div className={classes.iconButtons}>
            {[1, 2, 3, 4].map((count) => (
              <button
                key={count}
                className={`${classes.iconButton} ${imagesCount === count ? classes.active : ''}`}
                onClick={() => setImagesCount(count)}
                title={`${count} image${count > 1 ? 's' : ''}`}
              >
                <div className={classes.imageCountIcon}>
                  {Array.from({ length: count }).map((_, i) => (
                    <span key={i} className={classes.dot} />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Aspect Ratio Controls */}
        <div className={classes.controlGroup}>
          <div className={classes.controlLabel}>Aspect Ratio</div>
          <div className={classes.iconButtons}>
            {aspectRatios.map((ratio) => (
              <button
                key={ratio.value}
                className={`${classes.iconButton} ${
                  aspectRatio === ratio.value ? classes.active : ''
                }`}
                onClick={() => setAspectRatio(ratio.value)}
                title={ratio.value}
              >
                <span className={classes.ratioIcon}>{ratio.icon}</span>
                <span className={classes.ratioText}>{ratio.value}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={classes.hint}>
        Press <kbd>Enter</kbd> to generate • <kbd>Shift + Enter</kbd> for new line • {val.length}
        /1000
      </div>
    </div>
  );
}
