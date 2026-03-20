"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialsItem from "@/content/testimonials_item.js";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they are saying</p>
      </div>

      <div className="container" style={{ maxWidth: "1400px" }} data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={40}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <TestimonialsItem image="/assets/img/testimonials/testimonials-1.jpg" name="Saul Goodman" title="Ceo & Founder" text="Proin iaculis purus consequat sem cure digni ssim. Proin iaculis purus consequat sem cure digni ssim." />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsItem image="/assets/img/testimonials/testimonials-2.jpg" name="Sara Wilsson" title="Designer" text="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid." />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsItem image="/assets/img/testimonials/testimonials-3.jpg" name="Jena Karlis" title="Store Owner" text="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim." />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsItem image={"/assets/img/testimonials/testimonials-4.jpg"} name="Matt Brandon" title="Freelancer" text="Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam." />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsItem image={"/assets/img/testimonials/testimonials-5.jpg"} name="John Larson" title="Entrepreneur" text="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid." />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
