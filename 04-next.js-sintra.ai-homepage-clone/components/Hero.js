export default function Hero() {
  return (
    <div className="section_home-hero">
      <div className="home-hero_background">
        <div className="home-hero_background-overlay"></div>
        <div className="home-hero_background-video w-embed">
          <video
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
          >
            <source src="/vizzy_waving.mp4" data-categories="essential" />
            <source src="/vizzy_waving.webm" data-categories="essential" />
          </video>
        </div>
      </div>
      <div className="padding-global z-index-2">
        <div className="container-large padding-section-large">
          <div className="margin-bottom">
            <div className="text-color-alternate">
              <div className="max-width-large">
                <div className="home-hero_title">
                  <h1 className="text-size-7xl text-weight-medium text-size-8xl--tablet max-width-medium">
                    AI Employees: Your Helpers That Never Sleep
                  </h1>
                </div>
                <div className="spacer-small"></div>
                <p className="text-size-2xl text-style-muted text-weight-normal">
                  Build, grow, and scale your business with a team of AI
                  employees.
                </p>
                <div className="spacer-medium"></div>
                <div className="button-group">
                  <a
                    data-wf-native-id-path="95604ea5-4543-a536-dd19-9140f496fdde"
                    data-wf-ao-click-engagement-tracking="true"
                    data-wf-element-id="95604ea5-4543-a536-dd19-9140f496fdde"
                    href="/pricing"
                    className="button w-inline-block"
                  >
                    <div>Get Sintra</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
