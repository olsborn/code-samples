"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

function AccordionAnswer({ isOpen, children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(ref.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, children]);

  return (
    <div
      className="home-faq_answer"
      style={{
        width: "100%",
        height: isOpen ? height : 0,
        overflow: "hidden",
        transition: "height 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      ref={ref}
    >
      {children}
    </div>
  );
}

// Local FAQ item component
function FaqItem({ dataWid, question, isOpen, onClick, children }) {
  return (
    <>
      <div data-w-id={dataWid} className="home-faq_question" onClick={onClick}>
        <h3 className="text-size-2xl text-weight-medium">{question}</h3>
        <div className="home-faq_icon-wrapper">
          <div className="icon-embed-small w-embed">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <AccordionAnswer isOpen={isOpen}>{children}</AccordionAnswer>
    </>
  );
}

export default function Faq() {
  const [activeQuestion, setActiveQuestion] = useState("q1");

  function fHandleAccordionToggle(e, qId) {
    e.preventDefault();
    setActiveQuestion(qId === activeQuestion ? "" : qId);
  }

  return (
    <section id="faq" className="section_home-faq background-color-alternate">
      <div className="padding-global">
        <div className="container-large padding-section-large">
          <div className="home-faq_component breathing-space">
            <div className="w-layout-grid home-faq_content">
              <div className="home-faq_content-left">
                <h2 className="text-size-5xl">
                  Questions?
                  <br />
                  Let’s clear things up.
                </h2>
                <div className="spacer-small"></div>
                <p className="text-size-base text-style-muted">
                  Yes, we understand—AI-powered solutions, business automation
                  tools, AI for marketing, AI for customer support… a lot of big
                  words can get confusing.
                  <br />
                  <br />
                  We’re here to make it clear—check out our FAQs, and if you
                  still feel the need to ask AI questions, Cassie is always
                  ready to answer.
                </p>
              </div>
              <div className="home-faq_list">
                <div className="home-faq_accordion">
                  <FaqItem
                    dataWid="440b171e-b57c-bd88-307d-f0af2ba96ac5"
                    question="What can I use Sintra for?"
                    isOpen={activeQuestion === "q1"}
                    onClick={(e) => fHandleAccordionToggle(e, "q1")}
                  >
                    <p className="text-size-base text-style-muted line-height-1-5">
                      Sintra is designed to boost productivity and simplify your
                      business operations. You can use it for tasks like
                      administrative work, lead generation, content creation,
                      email outreach, social media management, project
                      management, and much more. It’s like having an{" "}
                      <Link href="/ai-helpers">AI Helper</Link> that completes
                      your day-to-day tasks.
                    </p>
                  </FaqItem>
                  <div className="spacer-small-2"></div>
                  <FaqItem
                    dataWid="440b171e-b57c-bd88-307d-f0af2ba96ac5"
                    question="Is there a money-back guarantee?"
                    isOpen={activeQuestion === "q2"}
                    onClick={(e) => fHandleAccordionToggle(e, "q2")}
                  >
                    <p className="text-size-base text-style-muted line-height-1-5">
                      Yes, we offer a
                      <Link href="/money-back-guarantee">
                        money-back guarantee
                      </Link>
                      to ensure your satisfaction with Sintra. If you’re not
                      happy with the platform within the specified guarantee
                      period, you can request a full refund.
                    </p>
                  </FaqItem>

                  <div className="spacer-small-2"></div>
                  <FaqItem
                    dataWid="440b171e-b57c-bd88-307d-f0af2ba96ac5"
                    question="Can I invite my team to use Sintra?"
                    isOpen={activeQuestion === "q3"}
                    onClick={(e) => fHandleAccordionToggle(e, "q3")}
                  >
                    <p className="text-size-base text-style-muted line-height-1-5">
                      Absolutely! Sintra allows you to collaborate with your
                      team by inviting them to the platform. You can work
                      together seamlessly—all in one place. It’s perfect for
                      boosting team productivity and coordination.
                    </p>
                  </FaqItem>

                  <div className="spacer-small-2"></div>
                  <FaqItem
                    dataWid="440b171e-b57c-bd88-307d-f0af2ba96ac5"
                    question="Does Sintra have an affiliate program?"
                    isOpen={activeQuestion === "q4"}
                    onClick={(e) => fHandleAccordionToggle(e, "q4")}
                  >
                    <p className="text-size-base text-style-muted line-height-1-5">
                      Yes, we offer
                      <Link href="/affiliate">Sintra affiliate program</Link>
                      where you can earn up to 50% commission for every sale
                      made through your unique link.
                    </p>
                  </FaqItem>
                  <div className="spacer-small-2"></div>
                  <FaqItem
                    dataWid="440b171e-b57c-bd88-307d-f0af2ba96ac5"
                    question="Are there tutorials or guides to help me use Sintra?"
                    isOpen={activeQuestion === "q5"}
                    onClick={(e) => fHandleAccordionToggle(e, "q5")}
                  >
                    <p className="text-size-base text-style-muted line-height-1-5">
                      Absolutely! We provide a variety of resources to help you
                      make the most of Sintra, including
                      <a href="/blog">Sintra blog</a>, detailed case studies,
                      and a<Link href="/">Help Center</Link>. For developer
                      users, we also offer guides and documentation to assist in
                      building and customizing AI agents. These materials are
                      designed to guide you through using the platform
                      effectively and answer any questions you may have.
                    </p>
                  </FaqItem>
                  <div className="spacer-small-2"></div>
                  <FaqItem
                    dataWid="440b171e-b57c-bd88-307d-f0af2ba96ac5"
                    question="Can Sintra integrate with other software I use?"
                    isOpen={activeQuestion === "q6"}
                    onClick={(e) => fHandleAccordionToggle(e, "q6")}
                  >
                    <p className="text-size-base text-style-muted line-height-1-5">
                      Yes, Sintra integrates with many leading tools, such as
                      Google Calendar, Notion, Facebook, Gmail and many more,
                      and is also compatible with leading AI systems for
                      seamless integration.
                    </p>
                  </FaqItem>
                  <div className="spacer-small-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
