"use client";
import Link from "next/link";

export default function Footer() {
  const HandleClick = () => {
    document.body.classList.remove("content-active");
    const footer = document.getElementById("footer");
    if (footer) {
      footer.classList.remove("active");
    }
  };

  return (
    <footer id="footer" className="panel">
      <div className="inner split">
        <div>
          <section>
            <h2>Magna feugiat sed adipiscing</h2>
            <p>
              Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat,
              et scelerisque turpis ipsum eget quis orci mattis aliquet.
              Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu
              bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut
              suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis
              ipsum.
            </p>
          </section>
          <section>
            <h2>Follow me on ...</h2>
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
                <Link href="#" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="icon brands fa-dribbble">
                  <span className="label">Dribbble</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="icon brands fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </Link>
              </li>
            </ul>
          </section>

          <p className="copyright">
            © Unttled. Design: <Link href="http://html5up.net">HTML5 UP</Link>.
          </p>
        </div>
        <div>
          <section>
            <h2>Get in touch</h2>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="field half">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="field">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send" className="primary" />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </form>
          </section>
        </div>
      </div>
      <div className="closer" onClick={HandleClick}></div>
    </footer>
  );
}
