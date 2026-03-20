"use client";
import Hero from "@/content/hero";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const images = ["gallery-14.jpg", "gallery-8.jpg", "gallery-9.jpg", "gallery-10.jpg", "gallery-11.jpg", "gallery-12.jpg", "gallery-13.jpg"];
  return (
    <>
      <Hero>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1>Gallery Single</h1>
              <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              <br />
              <Link href="/contact" className="btn-get-started">
                Available for Hire
              </Link>
            </div>
          </div>
        </div>
      </Hero>

      <section id="gallery-details" className="gallery-details section">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="portfolio-details-slider">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div style={{ position: "relative", width: "100%", aspectRatio: "6 / 5" }}>
                    <Image src={`/assets/img/gallery/${img}`} alt="" layout="fill" objectFit="cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div>

          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8 aos-init aos-animate" data-aos="fade-up">
              <div className="portfolio-description">
                <h2>This is an example of portfolio details</h2>
                <p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
                <p>Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.</p>

                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <div>
                    <Image src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" width={90} height={90} alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>

                <p>Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.</p>

                <p>Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.</p>
              </div>
            </div>

            <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong> Web design
                  </li>
                  <li>
                    <strong>Client</strong> ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong> 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong> <a href="#">www.example.com</a>
                  </li>
                  <li>
                    <Link href="#" className="btn-visit align-self-start">
                      Visit Website
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
