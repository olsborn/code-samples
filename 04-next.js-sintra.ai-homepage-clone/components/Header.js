"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="header-transparent">
      <div className="header">
        <div className="navbar">
          <div className="navbar__wrapper">
            <Link
              href="/"
              aria-current="page"
              className="navbar__logo w-inline-block w--current"
            >
              <Image
                src="/66253c9440f55447fcfdc8d7_logo.webp"
                alt="Sintra.ai homepage"
                className="logo big"
                width={276}
                height={72}
              />
            </Link>
            <div className="navbar__positioner">
              <div className={`navbar__menu${menuActive ? " active" : ""}`}>
                <div className="navbar__navigation">
                  <div className="navbar__drawer">
                    <div className="navbar__drawer_trigger">
                      <div className="text-size-medium">Products</div>
                      <div className="icon-1x1-xsmall w-embed">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.5303 13.0303C15.2374 13.3232 14.7626 13.3232 14.4697 13.0303L11.7324 10.2931C11.3276 9.8883 11.0555 9.61703 10.8292 9.42491C10.6096 9.23847 10.4829 9.17101 10.3863 9.13961C10.1352 9.05803 9.86478 9.05803 9.61373 9.13961C9.51706 9.17101 9.39038 9.23847 9.17076 9.42491C8.94445 9.61704 8.67236 9.8883 8.26759 10.2931L5.53033 13.0303C5.23744 13.3232 4.76256 13.3232 4.46967 13.0303C4.17678 12.7374 4.17678 12.2626 4.46967 11.9697L7.20693 9.23241L7.22846 9.21088C7.60615 8.83317 7.9214 8.51791 8.2 8.2814C8.49056 8.03473 8.79021 7.82999 9.1502 7.71302C9.70252 7.53356 10.2975 7.53356 10.8498 7.71302C11.2098 7.82999 11.5094 8.03473 11.8 8.2814C12.0786 8.51791 12.3939 8.83318 12.7715 9.21089L12.7931 9.23241L15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="navbar__drawer_dropdown">
                      <div className="navbar__drawer_dropdown__wrapper">
                        <div className="navbar__helper_drawer">
                          <Link
                            href="/soshie"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c5ead31a7ca2883493_soshie.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Social Media Manager
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Soshie
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/cassie"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c58c088366f097c07b_cassie.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Customer Support
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Cassie
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/dexter"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c5d6d58bbe8174f0c9_dexter.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Data Analyst
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Dexter
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/buddy"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c4e40fd7535494e317_buddy.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Business Strategist
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Buddy
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/emmie"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c45a27d10a7f57775f_emmie.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Email Marketer
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Emmie
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/gigi"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c5dd6a1b6dc7a821ea_gigi.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Personal Growth
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Gigi
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/scouty"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c468a468b323d0d603_scouty.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Recruiter
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Scouty
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/penn"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c4f73e556afb43b632_penn.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Copywriter
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Penn
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/milli"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c55944d88a02623a78_milli.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Sales Strategist
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Milli
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/seomi"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c4a4a36b622a17fbed_seomi.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                SEO Mastermind
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Seomi
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="vizzy"
                            className="helper_drawer__item w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <Image
                              src="/685292c58c088366f097c074_vizzy.avif"
                              width={80}
                              height={40}
                              alt=""
                              className="helper_drawer__item_image"
                              style={{ marginTop: "15px" }}
                            />
                            <div className="helper_drawer__item_content">
                              <div className="text-size-base text-weight-medium">
                                Virtual Assistant
                              </div>
                              <div className="text-size-sm text-style-muted">
                                Vizzy
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/pricing?"
                            className="helper_drawer__team w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base text-weight-medium">
                              Full Team
                            </div>
                            <div className="text-size-sm text-style-muted">
                              Sintra X
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar__drawer desktop">
                    <div className="navbar__drawer_trigger">
                      <div className="text-size-base">Features</div>
                      <div className="icon-1x1-xsmall w-embed">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.5303 13.0303C15.2374 13.3232 14.7626 13.3232 14.4697 13.0303L11.7324 10.2931C11.3276 9.8883 11.0555 9.61703 10.8292 9.42491C10.6096 9.23847 10.4829 9.17101 10.3863 9.13961C10.1352 9.05803 9.86478 9.05803 9.61373 9.13961C9.51706 9.17101 9.39038 9.23847 9.17076 9.42491C8.94445 9.61704 8.67236 9.8883 8.26759 10.2931L5.53033 13.0303C5.23744 13.3232 4.76256 13.3232 4.46967 13.0303C4.17678 12.7374 4.17678 12.2626 4.46967 11.9697L7.20693 9.23241L7.22846 9.21088C7.60615 8.83317 7.9214 8.51791 8.2 8.2814C8.49056 8.03473 8.79021 7.82999 9.1502 7.71302C9.70252 7.53356 10.2975 7.53356 10.8498 7.71302C11.2098 7.82999 11.5094 8.03473 11.8 8.2814C12.0786 8.51791 12.3939 8.83318 12.7715 9.21089L12.7931 9.23241L15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="navbar__drawer_dropdown">
                      <div className="navbar__drawer_dropdown__wrapper">
                        <div className="navbar__drawer_card">
                          <Link
                            href="/blog"
                            className="navbar__link hidden w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">Automations</div>
                          </Link>
                          <Link
                            href="/features/brain-ai"
                            className="navbar__link w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">Brain AI</div>
                          </Link>
                          <Link
                            href="/blog"
                            className="navbar__link hidden w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">Integrations</div>
                          </Link>
                          <Link
                            href="/features/power-ups"
                            className="navbar__link w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">Power-ups</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/pricing"
                    className="navbar__link desktop w-inline-block"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="text-size-base">Pricing</div>
                  </Link>
                  <div className="navbar__drawer">
                    <div className="navbar__drawer_trigger">
                      <div className="text-size-medium">Resources</div>
                      <div className="icon-1x1-xsmall w-embed">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.5303 13.0303C15.2374 13.3232 14.7626 13.3232 14.4697 13.0303L11.7324 10.2931C11.3276 9.8883 11.0555 9.61703 10.8292 9.42491C10.6096 9.23847 10.4829 9.17101 10.3863 9.13961C10.1352 9.05803 9.86478 9.05803 9.61373 9.13961C9.51706 9.17101 9.39038 9.23847 9.17076 9.42491C8.94445 9.61704 8.67236 9.8883 8.26759 10.2931L5.53033 13.0303C5.23744 13.3232 4.76256 13.3232 4.46967 13.0303C4.17678 12.7374 4.17678 12.2626 4.46967 11.9697L7.20693 9.23241L7.22846 9.21088C7.60615 8.83317 7.9214 8.51791 8.2 8.2814C8.49056 8.03473 8.79021 7.82999 9.1502 7.71302C9.70252 7.53356 10.2975 7.53356 10.8498 7.71302C11.2098 7.82999 11.5094 8.03473 11.8 8.2814C12.0786 8.51791 12.3939 8.83318 12.7715 9.21089L12.7931 9.23241L15.5303 11.9697C15.8232 12.2626 15.8232 12.7374 15.5303 13.0303Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="navbar__drawer_dropdown">
                      <div className="navbar__drawer_dropdown__wrapper">
                        <div className="navbar__drawer_card">
                          <Link
                            href="/blog"
                            className="navbar__link w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">Blog</div>
                          </Link>
                          <Link
                            href="/case-studies"
                            className="navbar__link w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">Case studies</div>
                          </Link>
                          <Link
                            href="#faq"
                            className="navbar__link w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">FAQ</div>
                          </Link>
                          <Link
                            href="/help"
                            className="navbar__link w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">Help center</div>
                          </Link>
                          <Link
                            href="/ai-helpers"
                            className="navbar__link w-inline-block"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="text-size-base">
                              What is an AI Helper
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/careers"
                    className="navbar__link desktop w-inline-block"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="text-size-base">Careers</div>
                  </Link>
                </div>
                <div className="header__navigation">
                  <Link
                    href="/login"
                    className="navbar__link w-inline-block"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="text-size-base">Log in</div>
                  </Link>
                  <Link
                    href="/pricing"
                    className="navbar__link cta w-inline-block"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="text-size-base text-weight-medium">
                      Get Started
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="navbar__burger"
              style={{ cursor: "pointer" }}
              onClick={() => setMenuActive((prev) => !prev)}
            >
              <div className="burger-line"></div>
              <div className="burger-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
