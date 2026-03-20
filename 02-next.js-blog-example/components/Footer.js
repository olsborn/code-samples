import Link from 'next/link';

export default function Footer() {
  return (
    <section id="footer">
      <ul className="icons">
        <li>
          <Link href="#" className="icon brands fa-twitter">
            <span className="label">Twitter</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="icon brands fa-facebook-f">
            <span className="label">Facebook</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="icon solid fa-rss">
            <span className="label">RSS</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="icon solid fa-envelope">
            <span className="label">Email</span>
          </Link>
        </li>
      </ul>
      <p className="copyright">
        © Untitled. Design: <Link href="http://html5up.net">HTML5 UP</Link>.
        Images: <Link href="http://unsplash.com">Unsplash</Link>.
      </p>
    </section>
  );
}
