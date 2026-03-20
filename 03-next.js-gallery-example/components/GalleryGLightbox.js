"use client";
import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

export default function GalleryGLightbox({ images }) {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
    });
    return () => {
      lightbox.destroy();
    };
  }, [images]);

  return null;
}
