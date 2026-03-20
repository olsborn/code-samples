import Link from "next/link";

export default function Cta() {
  return (
    <div className="section_home-cta background-color-alternate">
      <div className="padding-global">
        <div className="container-large padding-section-large padding-top">
          <div className="home-cta_component">
            <div className="home-cta_content">
              <div className="home-cta_content-container padding-section-large">
                <div className="margin-bottom">
                  <div className="text-color-alternate">
                    <div className="home-cta_content-wrap">
                      <h2 className="text-size-7xl max-width-medium">
                        Your new team with infinite knowledge.
                      </h2>
                      <div className="spacer-small"></div>
                      <p className="text-size-2xl text-style-muted align-center text-size-lg--mobile">
                        AI for business has never been this personal—meet your
                        new team, working hard so you don’t have to.
                      </p>
                      <div className="spacer-medium"></div>
                      <div className="button-group">
                        <div className="w-optimization">
                          <div className="w-optimization">
                            <Link
                              href="/pricing"
                              className="button w-inline-block"
                            >
                              <div>Get Sintra</div>
                            </Link>
                          </div>
                          <div className="w-optimization">
                            <Link
                              href="/pricing"
                              className="button is-special-white w-inline-block"
                            >
                              <div>Get Sintra</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_65b4894e-d767-f4cb-2606-6d455801483e-a0cabc6e"
              className="home-cta_visual"
            >
              <img
                src="/673fa35a6278374bebb41f4e_homepage-cta-mockup.avif"
                alt=""
                className="home-cta_visual-image"
              />
            </div>
            <div className="home-cta_background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
