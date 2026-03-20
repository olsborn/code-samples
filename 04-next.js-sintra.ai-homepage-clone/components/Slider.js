"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function SliderFrame({
  href,
  videoId,
  videoPoster,
  videoMp4,
  videoWebm,
  name,
  description,
}) {
  return (
    <div className="slider_item">
      <Link href={href} className="slider_item-content w-inline-block">
        <div className="slider_item-video w-background-video w-background-video-atom">
          <video
            id={videoId}
            autoPlay
            loop
            style={{ backgroundImage: `url(${videoPoster})` }}
            muted
            playsInline
          >
            <source src={videoMp4} />
            <source src={videoWebm} />
          </video>
        </div>
      </Link>
      <div className="slider_label-item">
        <Link
          href={href}
          className="slider_label-item-headline w-inline-block"
          style={{ textDecoration: "none" }}
        >
          <h2 className="text-size-3xl">{name}</h2>
        </Link>
        <p className="text-size-base text-color-neutral-400">{description}</p>
      </div>
    </div>
  );
}

export default function Slider() {
  return (
    <div className="section_home-helpers background-color-alternate">
      <div className="padding-global z-index-2">
        <div className="container-large padding-section-large">
          <div className="section_home-helpers_slider">
            <div className="slider_curtains">
              <div className="slider_overlay slider_overlay--left"></div>
              <div className="slider_overlay slider_overlay--right"></div>
            </div>

            <div className="slider_arrow next swiper-button-next">
              <div className="slider_arrow__icon w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M8.33203 19.9987H31.6654M31.6654 19.9987L19.9987 8.33203M31.6654 19.9987L19.9987 31.6654"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="slider_arrow prev swiper-button-prev">
              <div className="slider_arrow__icon w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M31.668 19.9987H8.33464M8.33464 19.9987L20.0013 8.33203M8.33464 19.9987L20.0013 31.6654"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="slider_sleeve" style={{ maxWidth: "1400px" }}>
              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                speed={800}
                autoplay={{ delay: 4000 }}
                centeredSlides={true}
                slidesPerView={4}
                spaceBetween={32}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 4, spaceBetween: 14 },
                  600: { slidesPerView: 4, spaceBetween: 14 },
                  1200: { slidesPerView: 4, spaceBetween: 32 },
                }}
              >
                <SwiperSlide>
                  <SliderFrame
                    href="/seomi"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d371-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460cf8218f6fb4b7f708b2_seomi_idle_short_blilnk_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460cf8218f6fb4b7f708b2_seomi_idle_short_blilnk_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460cf8218f6fb4b7f708b2_seomi_idle_short_blilnk_1-transcode.webm"
                    name="Seomi"
                    description="SEO Specialist. Streamline business processes with Seomi’s proven SEO strategies, SEO-optimized blog posts, and AI-powered solutions to boost your website rankings. Seomi brings advanced SEO skills to your team, helping you stay ahead in search rankings."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="/soshie"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d374-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460cfe78dd86c42545bad8_soshie_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460cfe78dd86c42545bad8_soshie_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460cfe78dd86c42545bad8_soshie_idle_short_blink_1-transcode.webm"
                    name="Soshie"
                    description="Social Media Manager. Boost Productivity with AI social media manager by using business automation tools—generate content, plan strategies, schedule posts, find trends, and more. Soshie can collaborate with your marketing and content teams to ensure a unified social media strategy."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="/vizzy"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d377-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460d0381cab44875de2583_vizzy_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460d0381cab44875de2583_vizzy_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460d0381cab44875de2583_vizzy_idle_short_blink_1-transcode.webm"
                    name="Vizzy"
                    description="Virtual Assistant. A trustworthy AI for business owners and busy entrepreneurs to handle calendars, schedule meetings, plan trips, or simply ask AI questions about daily challenges."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="https://sintra.ai/milli"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d37a-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460d0a566f3616a558637a_milli_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460d0a566f3616a558637a_milli_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460d0a566f3616a558637a_milli_idle_short_blink_1-transcode.webm"
                    name="Milli"
                    description="Sales Manager. Milli uses your business insights to craft compelling cold call scripts, design persuasive cold emails, and build pitches that help you close deals with confidence. Milli is also capable of adapting sales strategies to different audiences and markets."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="https://sintra.ai/buddy"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d37b-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460c4c525b5d57a4e8bb02_buddy_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460c4c525b5d57a4e8bb02_buddy_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460c4c525b5d57a4e8bb02_buddy_idle_short_blink_1-transcode.webm"
                    name="Buddy"
                    description="Business Development Manager. Your go-to AI for business development, crafting growth strategies, delivering business insights, and excelling in AI for marketing to ensure success in product launches, audience analysis, and more. Buddy has helped companies of all sizes achieve their business development goals."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="/cassie"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d37c-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460ccdf6e4fa275a7c75a9_cassie_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460ccdf6e4fa275a7c75a9_cassie_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460ccdf6e4fa275a7c75a9_cassie_idle_short_blink_1-transcode.webm"
                    name="Cassie"
                    description="Customer Support Specialist. As a smart and charming AI for customer support, Cassie crafts expertly tailored responses to customer queries while maintaining your brand’s unique voice. Cassie works alongside your human employees, supporting them to deliver exceptional customer support."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="/commet"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d37d-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460cd41f42038374d698aa_commet_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460cd41f42038374d698aa_commet_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460cd41f42038374d698aa_commet_idle_short_blink_1-transcode.webm"
                    name="Commet"
                    description="eCommerce Manager. Your trusted eCommerce guru, here to guide you through online store setup, product launches, and streamline business processes with efficient processing of orders, inventory, and customer data."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="/dexter"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d37e-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460cdad71380b27d8ea973_dexter_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460cdad71380b27d8ea973_dexter_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460cdad71380b27d8ea973_dexter_idle_short_blink_1-transcode.webm"
                    name="Dexter"
                    description="Data Analyst. A data genius seamlessly transforming complex data into precise calculations, forecasts, and clear, actionable business insights that drive results. With Dexter, you gain actionable insights that inform your business decisions."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="/emmie"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d37f-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460cdf842bd7f9ed3683d5_emmie_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460cdf842bd7f9ed3683d5_emmie_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460cdf842bd7f9ed3683d5_emmie_idle_short_blink_1-transcode.webm"
                    name="Emmie"
                    description="Email Marketing Specialist. From crafting engaging emails to generating effective win-back flows, Emmie uses her AI-powered solutions to turn your subscriber list into revenue. Emmie also helps reduce the cost of email marketing campaigns while increasing ROI."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="https://sintra.ai/gigi"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d380-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460ce788887965a3f51d76_gigi_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460ce788887965a3f51d76_gigi_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460ce788887965a3f51d76_gigi_idle_short_blink_1-transcode.webm"
                    name="Gigi"
                    description="Personal Growth Coach. Boost productivity with AI—whether you need help planning meals, organizing study sessions, or building workout routines, Gigi is here to support your journey to a better self and bring balance and improvement to your daily life."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="/penn"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d381-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460ced1ae3bb4bd972d59e_penn_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460ced1ae3bb4bd972d59e_penn_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460ced1ae3bb4bd972d59e_penn_idle_short_blink_1-transcode.webm"
                    name="Penn"
                    description="Copywriter. Dedicated to writing compelling copy for your ads, blog posts, websites, advertorials and other marketing campaigns that convert readers into customers. For example, Penn can generate engaging ad copy for a new product launch or craft a persuasive email marketing campaign to boost conversions."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SliderFrame
                    href="/scouty"
                    videoId="8a91d3d5-35b6-a569-ff17-4922c0b9d382-video"
                    videoPoster="/673ead940412138dd4bf8e83_67460cf23297a144839f1512_scouty_idle_short_blink_1-poster-00001.jpg"
                    videoMp4="/673ead940412138dd4bf8e83_67460cf23297a144839f1512_scouty_idle_short_blink_1-transcode.mp4"
                    videoWebm="/673ead940412138dd4bf8e83_67460cf23297a144839f1512_scouty_idle_short_blink_1-transcode.webm"
                    name="Scouty"
                    description="Recruiter. Turning hiring challenges into opportunities, crafting magnetic job posts, and guiding smooth team onboarding. Scouty can support recruitment needs across all departments, from HR to finance to customer service. For any recruitment-related topics, this is your go-to employee to ask AI questions."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>

            <div className="button-group">
              <Link href="/x" className="button w-button">
                Get helpers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
