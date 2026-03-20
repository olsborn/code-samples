import Link from 'next/link';
export default function MobileMenu() {
  return (
    <section id="menu">
      <section>
        <form className="search" method="get" action="#">
          <input type="text" name="query" placeholder="Search" />
        </form>
      </section>

      <section>
        <ul className="links">
          <li>
            <Link
              href="#"
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
            >
              <h3>Lorem ipsum</h3>
              <p>Feugiat tempus veroeros dolor</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
            >
              <h3>Dolor sit amet</h3>
              <p>Sed vitae justo condimentum</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
            >
              <h3>Feugiat veroeros</h3>
              <p>Phasellus sed ultricies mi congue</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
            >
              <h3>Etiam sed consequat</h3>
              <p>Porta lectus amet ultricies</p>
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <ul className="actions stacked">
          <li>
            <a
              href="#"
              className="button large fit"
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
            >
              Log In
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}
