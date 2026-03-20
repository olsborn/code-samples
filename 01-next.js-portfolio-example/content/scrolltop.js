"use client";

import { useEffect, useState } from "react";
import styles from "./scrolltop.module.css";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href="#" id="scroll-top" className={`scroll-top d-flex align-items-center justify-content-center ${styles.scrollTop} ${visible ? styles.scrollTopVisible : ""}`} onClick={handleClick}>
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
