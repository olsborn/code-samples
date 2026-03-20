"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <i className="bi bi-camera"></i>
          <h1 className="sitename">PhotoFolio</h1>
        </Link>

        {/* Desktop Nav */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
                <br />
              </Link>
            </li>
            <li>
              <Link href="/about" className={pathname === "/about" ? "active" : ""}>
                About
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/gallery" className={pathname === "/gallery" ? "active" : ""}>
                <span>Gallery</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link href="/gallery">Nature</Link>
                </li>
                <li>
                  <Link href="/gallery">People</Link>
                </li>
                <li>
                  <Link href="/gallery">Architecture</Link>
                </li>
                <li>
                  <Link href="/gallery">Animals</Link>
                </li>
                <li>
                  <Link href="/gallery">Sports</Link>
                </li>
                <li>
                  <Link href="/gallery">Travel</Link>
                </li>
                <li className="dropdown">
                  <Link href="#">
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">Deep Dropdown 1</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/services" className={pathname === "/services" ? "active" : ""}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
                Contact
              </Link>
            </li>
          </ul>
          {!menuOpen && <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={() => setMenuOpen((prev) => !prev)}></i>}
        </nav>

        <div className="header-social-links">
          <Link href="#" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>

        {/* Mobile Menu Overlay with modal layer and animation */}
        {menuOpen && (
          <>
            {/* Modal Layer */}
            <div className={`${styles.modalOverlay} ${menuOpen ? styles.modalOverlayOpen : ""}`} onClick={() => setMenuOpen(false)} />
            {/* Slide-in Nav */}
            <nav className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button style={{ background: "none", border: "none", fontSize: 28, cursor: "pointer" }} onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <i className="bi bi-x" style={{ color: "#888" }}></i>
                </button>
              </div>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 32 }}>
                <li>
                  <Link href="/" className={`${styles.mobileNavLink} ${pathname === "/" ? styles.mobileNavLinkActive : null}`} onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={`${styles.mobileNavLink} ${pathname === "/about" ? styles.mobileNavLinkActive : null}`} onClick={() => setMenuOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className={`${styles.mobileNavLink} ${pathname === "/gallery" ? styles.mobileNavLinkActive : null}`} onClick={() => setMenuOpen(false)}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/services" className={`${styles.mobileNavLink} ${pathname === "/services" ? styles.mobileNavLinkActive : null}`} onClick={() => setMenuOpen(false)}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`${styles.mobileNavLink} ${pathname === "/contact" ? styles.mobileNavLinkActive : null}`} onClick={() => setMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
                <Link href="#" className="twitter">
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
