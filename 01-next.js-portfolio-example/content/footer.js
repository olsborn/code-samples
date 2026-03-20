import Link from "next/link";

export default function Footer() {
  return (
    <footer data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="600" id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">PhotoFolio</strong>
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <Link href="#">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link href="#">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="#">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="#">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
        <div className="credits">
          Designed by <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
          <span style={{ marginLeft: "5px" }}>
            Distributed by <Link href="https://themewagon.com">ThemeWagon</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
