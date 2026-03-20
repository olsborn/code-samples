"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "glightbox/dist/css/glightbox.min.css";
import GalleryItem from "./gallery_item";

export default function Gallery() {
  useEffect(() => {
    let lightbox;
    import("glightbox").then(({ default: GLightbox }) => {
      lightbox = GLightbox({ selector: ".glightbox" });
    });
    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  return (
    <section id="gallery" className="gallery section">
      <div className="container-fluid">
        <div className="row gy-4 justify-content-center">
          {[...Array(8)].map((_, i) => (
            <GalleryItem key={i} delay={i * 150} imageSrc={`/assets/img/gallery/gallery-${i + 1}.jpg`} title={`Gallery ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
