import Image from "next/image";
export default function Present() {
  return (
    <div className="section_home-present background-color-alternate">
      <div className="home-present_visual-wrapper">
        <img
          src="/672384f30ff5f820be7412d1_present-mockup.avif"
          alt=""
          className="home-present_image"
        />
      </div>
      <div className="home-present_content breathing-space">
        <div className="padding-global padding-section-large">
          <div className="margin-bottom margin-large">
            <h2 className="text-size-7xl text-size-4xl--mobile">
              A co-worker who’s always on the clock.
            </h2>
          </div>
          <div>
            <div className="margin-bottom margin-medium">
              <p className="text-size-xl">
                Available 24/7.
                <span className="text-style-muted">
                  AI tools are always on and available around the clock to
                  support your business. The only helpers who love overtime.
                  Always ready to save your most valuable asset—your time.
                </span>
              </p>
            </div>
          </div>
          <p className="text-size-lg">
            Speaks in 100+ languages.
            <span className="text-style-muted">
              Go global—select, communicate, and complete your work in over 100
              languages.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
