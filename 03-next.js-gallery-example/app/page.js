"use client";
import ClientAOS from "@/components/ClientAOS";
import Article from "@/components/Article";

import { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "glightbox/dist/css/glightbox.css";

export default function GalleryPage() {
  const images = useMemo(
    () => [
      "/01.jpg",
      "/02.jpg",
      "/03.jpg",
      "/04.jpg",
      "/05.jpg",
      "/06.jpg",
      "/07.jpg",
      "/08.jpg",
      "/09.jpg",
      "/10.jpg",
      "/11.jpg",
      "/12.jpg",
      "/13.jpg",
      "/14.jpg",
      "/15.jpg",
      "/16.jpg",
    ],
    []
  );

  useEffect(() => {
    let lightbox;
    import("glightbox").then(({ default: GLightbox }) => {
      lightbox = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
      });
    });
    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, [images]);

  const articles = [
    {
      title: "Magna feugiat lorem",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Nisl adipiscing",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Tempus aliquam veroeros",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Aliquam ipsum sed dolore",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Cursis aliquam nisl",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Sed consequat phasellus",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Mauris id tellus arcu",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Nunc vehicula id nulla",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Neque et faucibus viverra",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Mattis ante fermentum",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Sed ac elementum arcu",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Vehicula id nulla dignissim",
      description:
        "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.",
    },
    {
      title: "Sunset Over the Lake",
      description:
        "A beautiful sunset paints the sky with vibrant colors over a calm lake.",
    },
    {
      title: "Urban Jungle",
      description:
        "Skyscrapers rise above the city, blending nature and architecture in harmony.",
    },
    {
      title: "Forest Morning",
      description:
        "Sunlight filters through tall trees, illuminating a misty forest path.",
    },
    {
      title: "Mountain Adventure",
      description:
        "Hikers explore rugged mountain trails surrounded by breathtaking views.",
    },
  ];

  return (
    <ClientAOS>
      <>
        <div id="main">
          <AnimatePresence>
            {articles.map((article, i) => (
              <motion.div key={i} layout>
                <Article
                  href={images[i]}
                  src={images[i]}
                  title={article.title}
                  description={article.description}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </>
    </ClientAOS>
  );
}
