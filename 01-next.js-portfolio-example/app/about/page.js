import Hero from "@/content/hero";
import Testimonials from "@/content/testimonials";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1>About</h1>
              <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              <br />
              <Link href="/contact" className="btn-get-started">
                Available for Hire
              </Link>
            </div>
          </div>
        </div>
      </Hero>

      <section id="about" className="about section">
        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4" style={{ aspectRatio: "2/2.7", position: "relative" }}>
              <Image src="/assets/img/profile-img.jpg" className="img-fluid" fill alt="" />
            </div>
            <div className="col-lg-5 content">
              <h2>UI/UX DesiProfessional Photographer from New Yorkgner &amp; Web Developer.</h2>
              <p className="fst-italic py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
              <p className="m-0">Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
