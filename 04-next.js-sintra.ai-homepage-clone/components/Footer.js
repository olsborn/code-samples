import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="footer">
      <div className="section_newsletter active">
        <div className="padding-global">
          <div className="container-large">
            <div className="newsletter_component">
              <div className="newsletter_headline">
                <Image
                  src="/67b60f25ca91145a62dc3727_newsletter_image.avif"
                  alt=""
                  className="newsletter_image"
                  width={241}
                  height={154}
                />
                <h2 className="text-size-4xl">
                  Want a mystery discount on your order?
                </h2>
              </div>
              <div className="newsletter_control">
                <div className="button is-white">
                  <div>Yes please</div>
                </div>
              </div>
              <div className="newsletter_form">
                <p className="text-size-base opacity-70">
                  Sign up for a mystery discount on your order and access to
                  special promos, launches, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="x-footer_component">
              <div className="footer__menu">
                <div className="footer__face">
                  <div className="footer__brand">
                    <Link href="#" className="w-inline-block">
                      <Image
                        src="/6628e2d9b36b0b9ab9ae8974_logo-gradient.svg"
                        alt="Sintra.ai homepage"
                        className="logo big"
                        width={241}
                        height={24}
                      />
                    </Link>
                    <div>
                      Copyright © 2025
                      <br />
                      PlayOS, Inc.
                      <br />
                      All rights reserved
                    </div>
                  </div>
                </div>
                <div className="footer__nav">
                  <div
                    id="w-node-abadce43-f83c-eb1b-ae85-ca42aa93d60d-a165cb89"
                    className="footer__nav-column"
                  >
                    <div className="text-size-base">Features</div>
                    <div className="footer__menu-list">
                      <Link
                        href="/pricing"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Sintra Helpers</div>
                      </Link>
                      <Link
                        href="/x-sintra"
                        className="footer__link hidden w-inline-block"
                      >
                        <div className="text-size-base">Automations</div>
                      </Link>
                      <Link
                        href="/features/brain-ai"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Brain AI</div>
                      </Link>
                      <Link
                        href="/pricing"
                        className="footer__link hidden w-inline-block"
                      >
                        <div className="text-size-base">Integrations</div>
                      </Link>
                      <Link
                        href="/pricing"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Power-ups</div>
                      </Link>
                    </div>
                  </div>
                  <div
                    id="w-node-abadce43-f83c-eb1b-ae85-ca42aa93d620-a165cb89"
                    className="footer__nav-column"
                  >
                    <div className="text-size-base">Resources</div>
                    <div className="footer__menu-list">
                      <Link
                        href="/blog"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Blog</div>
                      </Link>
                      <Link
                        href="/blog?"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Case studies</div>
                      </Link>
                    </div>
                  </div>
                  <div
                    id="w-node-abadce43-f83c-eb1b-ae85-ca42aa93d62d-a165cb89"
                    className="footer__nav-column"
                  >
                    <div className="text-size-base">About Us</div>
                    <div className="footer__menu-list">
                      <Link
                        href="/affiliate"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">
                          Become an Affiliate
                        </div>
                      </Link>
                      <Link
                        href="/careers"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Careers</div>
                      </Link>
                    </div>
                  </div>
                  <div
                    id="w-node-abadce43-f83c-eb1b-ae85-ca42aa93d634-a165cb89"
                    className="footer__nav-column"
                  >
                    <div className="text-size-base">Support</div>
                    <div className="footer__menu-list">
                      <Link href="/en" className="footer__link w-inline-block">
                        <div className="text-size-base">Help center</div>
                      </Link>
                      <Link href="#" className="footer__link w-inline-block">
                        <div className="text-size-base">Contact</div>
                      </Link>
                      <Link
                        href="/pricing"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Plans and Payments</div>
                      </Link>
                      <Link href="#faq" className="footer__link w-inline-block">
                        <div className="text-size-base">FAQ</div>
                      </Link>
                    </div>
                  </div>
                  <div
                    id="w-node-abadce43-f83c-eb1b-ae85-ca42aa93d644-a165cb89"
                    className="footer__nav-column"
                  >
                    <div className="text-size-base">Legal</div>
                    <div className="footer__menu-list">
                      <Link
                        href="/privacy-policy"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Privacy policy</div>
                      </Link>
                      <Link
                        href="/terms-and-conditions"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">
                          Terms and conditions
                        </div>
                      </Link>
                      <Link
                        href="/refund-policy"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Refund policy</div>
                      </Link>
                      <Link
                        href="/money-back-guarantee"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">
                          Money-Back Guarantee
                        </div>
                      </Link>
                      <Link
                        href="/legal"
                        className="footer__link w-inline-block"
                      >
                        <div className="text-size-base">Other policies</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
