"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Bakcground() {
  const wrapperRef = useRef(null);
  const [imgIdx, setImgIdx] = useState(1);

  useEffect(() => {
    function handleScroll() {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      //const windowCenterY = windowHeight / 2;
      //const elemCenterY = rect.top + rect.height / 2;

      if (rect.bottom > 0 && rect.top > 0 && rect.top < windowHeight) {
        let dist = rect.top / window.innerHeight;
        if (dist < 0) dist = 0;
        if (dist > 1) dist = 1;
        const idx = Math.max(1, Math.round(24 - 23 * dist));
        setImgIdx((prev) => idx);
      } else {
        setImgIdx((prev) => (prev !== 24 ? 1 : 24));
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="section_home-lore background-color-alternate"
      style={{ marginTop: "-80px" }}
    >
      <div className="padding-global z-index-2">
        <div className="container-large padding-section-large">
          <div
            id="home-lore-image-wrapper"
            ref={wrapperRef}
            className="home-lore_image-wrapper"
            style={{
              position: "relative",
              width: "min(100%,1200px)",
              aspectRatio: "16/9 !important",
            }}
          >
            {[...Array(24)].map((_, i) => (
              <Image
                key={24 - i}
                src={`/scroll/${24 - i}.jpg`}
                alt=""
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority={24 - i === 1}
                quality={85}
                style={{
                  zIndex: imgIdx === 24 - i ? 2 : 1,
                  opacity: imgIdx === 24 - i ? 1 : 0,
                }}
              />
            ))}
            <div className="home-lore_overlay"></div>
          </div>
          <div
            className="margin-top margin-large"
            style={{ marginTop: "96px" }}
          >
            <p className="text-size-5xl text-weight-medium text-align-center max-width-large align-center">
              Sintra. World’s first AI helpers, personalized for your business.
              These AI employees can be integrated into any workforce, helping
              businesses of all sizes prepare for the future. Making work feel
              like play.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
