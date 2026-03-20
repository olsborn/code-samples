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
              <h1>Services</h1>
              <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              <br />
              <Link href="/contact" className="btn-get-started">
                Available for Hire
              </Link>
            </div>
          </div>
        </div>
      </Hero>

      <section id="services" className="services section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-3 col-md-6 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-activity icon"></i>
                </div>
                <h4>
                  <Link href="#" className="stretched-link">
                    Lorem Ipsum
                  </Link>
                </h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles icon"></i>
                </div>
                <h4>
                  <Link href="#" className="stretched-link">
                    Sed ut perspici
                  </Link>
                </h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week icon"></i>
                </div>
                <h4>
                  <Link href="#" className="stretched-link">
                    Magni Dolores
                  </Link>
                </h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast icon"></i>
                </div>
                <h4>
                  <Link href="#" className="stretched-link">
                    Nemo Enim
                  </Link>
                </h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing section">
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>Check my adorable pricing</p>
        </div>

        <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 gx-lg-5">
            <div className="col-lg-6">
              <div className="pricing-item d-flex justify-content-between">
                <h3>Portrait Photography</h3>
                <h4>$160.00</h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pricing-item d-flex justify-content-between">
                <h3>Fashion Photography</h3>
                <h4>$300.00</h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pricing-item d-flex justify-content-between">
                <h3>Sports Photography</h3>
                <h4>$200.00</h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pricing-item d-flex justify-content-between">
                <h3>Still Life Photography</h3>
                <h4>$120.00</h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pricing-item d-flex justify-content-between">
                <h3>Wedding Photography</h3>
                <h4>$500.00</h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="pricing-item d-flex justify-content-between">
                <h3>Photojournalism</h3>
                <h4>$200.00</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
