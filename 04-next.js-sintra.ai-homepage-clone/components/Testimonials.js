import Image from "next/image";

function TestimonialItem({ title, starsSrc, avatarSrc, text, meta }) {
  return (
    <div className="home-testimonials_card">
      <div className="home-testimonials_card-header">
        <div className="home-testimonials_card-header">
          <div className="grow">
            <div className="text-weight-medium">{title}</div>
            <div className="spacer-xsmall"></div>
            <Image
              src={starsSrc}
              alt=""
              className="home-testimonials_stars"
              width={123}
              height={20}
            />
          </div>
          <Image
            src={avatarSrc}
            alt=""
            className="home-testimonials_avatar"
            width={32}
            height={32}
          />
        </div>
      </div>
      <p className="text-size-base text-style-muted">{text}</p>
      <p className="text-size-sm text-color-tertiary">{meta}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="section_home-testimonials background-color-alternate">
      <div className="padding-global">
        <div className="container-large padding-section-large breathing-space">
          <div className="text-align-center margin-bottom margin-xxlarge">
            <div className="max-width-large align-center">
              <h2 className="text-size-7xl text-align-center text-size-4xl--mobile">
                Helpers of the month, every month.
              </h2>
              <div className="spacer-small"></div>
              <p className="text-size-2xl text-style-muted align-center">
                With over 40,000 entrepreneurs from more than 100 countries,
                Sintra is the world’s leading provider of business automation
                tools and AI-powered solutions, including AI for marketing, AI
                for customer support, and more. Sintra supports businesses at
                every stage of their AI implementation journey, from initial
                pilot phases to scaling and optimizing AI initiatives.
              </p>
            </div>
          </div>
          <div className="home-testimonials_component">
            <div style={{ height: "500px" }} className="home-testimonials_grid">
              <div className="home-testimonials_column">
                <TestimonialItem
                  title="So far, I love it!"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b5ccb5c11f13918a3ddb5_mister-3.webp"
                  text="My life is simpler with Sintra. It handles content creation, next steps, brainstorming, and copy. I highly recommend it if you want to free up mental space for what truly matters in your business."
                  meta="December 28, 2024 • Lionel D'Alvia • US"
                />
                <TestimonialItem
                  title="I Love Using Sintra"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b5bda5b7380b799b2c5cc_empire.avif"
                  text="My “team” in Sintra knocks out tasks like magic, offering fresh ideas for efficiency and better customer outreach. It’s a relief knowing I have AI assistants ready to go around the clock."
                  meta="December 31, 2024 • Kat Angelica • US"
                />
                <TestimonialItem
                  title="Some Time They’re Too Effective with Ideas"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b5ccc08151b0e8112ada5_ry.avif"
                  text="{`I’m not usually one to give top marks, but once I got
                    comfortable with Sintra’s 12 helpers, I was blown away by
                    their efficiency. They churn out so many analytical ideas I
                    have to pause and digest them. It’s sometimes overwhelming,
                    but in a good way.`}"
                  meta="December 11, 2024  • Mark  •  DK"
                />
              </div>
              <div className="home-testimonials_column">
                <TestimonialItem
                  title="Sintra X Saved Me Time"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b5cccc46b5fec88af652b_na.avif"
                  text="{`Signed up for Sintra X—it felt overwhelming at first, but
                    once it understood how I think, it turned into a creative
                    powerhouse. Support is top-notch, and the daily integrations
                    impress me.`}"
                  meta="December 10, 2024  •  Lars  •  DK"
                />
                <TestimonialItem
                  title="Some Time They’re Too Effective with Ideas"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b5ccc08151b0e8112ada5_ry.avif"
                  text="{`I’m not usually one to give top marks, but once I got
                    comfortable with Sintra’s 12 helpers, I was blown away by
                    their efficiency. They churn out so many analytical ideas I
                    have to pause and digest them. It’s sometimes overwhelming,
                    but in a good way.`}"
                  meta="December 11, 2024  • Mark  •  DK"
                />
                <TestimonialItem
                  title="SOOO much better than ChatGPT"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b5ccc08151b0e8112ada5_ry.avif"
                  text="Sintra integrates with all my favorite tools and these little helpers automate my tasks in a huge way. They actually learn my company’s style day by day. It’s a massive step up from generic AI chats."
                  meta="December 30, 2024 • Michelangelo • IT"
                />
              </div>
              <div className="home-testimonials_column">
                <TestimonialItem
                  title="Early but satisfied user"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b5ccc46817b15158483ca_b.avif"
                  text="I’ve only been using Sintra for a couple of weeks, but the experience has been great—especially with the social media bot reaching out to me with new ideas. The pull model feels super proactive and makes me more confident in my daily tasks."
                  meta="December 30, 2024 • Bayan Qandil • US"
                />
                <TestimonialItem
                  title="1st class service by everyone at Sintra.ai"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b5cccafc8dc06f64c24bb_mister-2.webp"
                  text="I challenge anyone to compare other platforms to Sintra.ai and their staff—you won’t find a better customer experience. Everyone is professional, responsive, and genuinely cares about helping. Truly top-notch!"
                  meta="December 28, 2024 • Timothy Montjoy • US"
                />
                <TestimonialItem
                  title="Sintra is Amazing!"
                  starsSrc="/68da2d687c59ae461c3428a3_testimonial-stars.png"
                  avatarSrc="/670b3259555a782d84fd377f_avatar-sh.avif"
                  text="This platform helps me like a full-time employee would. As a startup, I can’t afford extra staff, so Sintra stepped in to handle complex tasks and free me up for big-picture thinking."
                  meta="December 28, 2024 • Jules Kincaid • US"
                />
              </div>
            </div>
            <div className="floater_wrapper">
              <div
                data-w-id="76778eb9-1541-3504-c03f-0a3bb4fb327d"
                className="floater_component"
              >
                <div className="floater_content">
                  <div className="floater_avatars">
                    <Image
                      src="/670b5d3882af649433af33f3_mister-4.avif"
                      alt=""
                      className="floater_avatar"
                      width={32}
                      height={32}
                    />
                    <Image
                      src="/670b5ccb5c11f13918a3ddb5_mister-3.webp"
                      alt=""
                      className="floater_avatar"
                      width={32}
                      height={32}
                    />
                    <Image
                      src="/670b5cccafc8dc06f64c24bb_mister-2.webp"
                      alt=""
                      className="floater_avatar"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="text-weight-medium">
                    40,000+ business owners use Sintra
                  </div>
                </div>
                <div className="floater_divider"></div>
                <div
                  data-w-id="cbe3f412-e140-cf7a-99d7-15cf266de0f4"
                  style={{ display: "flex" }}
                  className="floater_cta more"
                >
                  <div className="text-weight-medium">View more</div>
                  <div className="icon-embed-xsmall w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8C11 7.44772 11.4477 7 12 7Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  data-w-id="a4045aa0-5b05-40fe-58e4-84d09ed73634"
                  style={{ display: "none" }}
                  className="floater_cta less"
                >
                  <div className="text-weight-medium">View less</div>
                  <div className="icon-embed-xsmall w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M11.051 16.6852H21.5773M29.472 16.6852C29.472 23.9521 23.581 29.8431 16.3141 29.8431C9.04724 29.8431 3.15625 23.9521 3.15625 16.6852C3.15625 9.41833 9.04724 3.52734 16.3141 3.52734C23.581 3.52734 29.472 9.41833 29.472 16.6852Z"
                        stroke="#171717"
                        fill="#ffffff"
                        strokeWidth="2.63158"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
