"use client";
import Link from "next/link";

export default function Header() {
  const HandleClick = (e) => {
    e.preventDefault();
    document.body.classList.toggle("content-active");
    const footer = document.getElementById("footer");
    if (footer) {
      footer.classList.toggle("active");
    }
  };

  return (
    <header id="header">
      <h1>
        <Link href="#" onClick={HandleClick}>
          <strong>hotos Responsive</strong> Next.js example
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              href="#"
              className="icon solid fa-info-circle"
              onClick={HandleClick}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
