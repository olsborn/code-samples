'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchVisible((v) => !v);
  };

  return (
    <header id="header">
      <h1>
        <Link href="/">Future Imperfect</Link>
      </h1>
      <nav className="links">
        <ul>
          <li>
            <Link href="#">Lorem</Link>
          </li>
          <li>
            <Link href="#">Ipsum</Link>
          </li>
          <li>
            <Link href="#">Feugiat</Link>
          </li>
          <li>
            <Link href="#">Tempus</Link>
          </li>
          <li>
            <Link href="#">Adipiscing</Link>
          </li>
        </ul>
      </nav>
      <nav className="main">
        <ul>
          <li className="search">
            <Link
              href="#search"
              className="fa-search"
              onClick={handleSearchClick}
            >
              Search
            </Link>
            <form
              id="search"
              method="get"
              action="#"
              className={searchVisible ? 'visible' : ''}
            >
              <input type="text" name="query" placeholder="Search" />
            </form>
          </li>
          <li>
            <Link
              href="#menu"
              className="fa-bars"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                document.body.classList.add('is-menu-visible');
              }}
            >
              Bars
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
