export default function Brain() {
  return (
    <div className="section_home-brain background-color-alternate">
      <div className="home-brain_header">
        <div className="padding-global">
          <div className="container-large">
            <div className="text-align-center">
              <div className="max-width-large align-center">
                <h2 className="text-size-7xl text-align-center">
                  They learn your business. Just like real helpers.
                </h2>
                <div className="spacer-small"></div>
                <p className="text-size-2xl text-style-muted align-center">
                  Answer questions about your brand, add files, instructions,
                  and your website for more unique results. The more information
                  they have, the better the outcome. AI employees are designed
                  to complement and enhance your human capabilities by handling
                  routine tasks, allowing you to focus on higher-level and
                  creative work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-brain_background">
        <img
          className="home-brain_floaters"
          src="/673eb161f734e9a1b54ff1bc_brain-ai-floaters.avif"
          alt=""
          style={{ opacity: 0.2 }}
        />
        <div className="home-brain_soshie">
          <div className="home-brain_video w-background-video w-background-video-atom">
            <video
              autoPlay
              style={{
                backgroundImage:
                  "url(/661d4f6d81ac1042b721396c_673ea9f10353f48a685fd1fc_SOshie_Landing_from Martynas-poster-00001.jpg)",
              }}
              muted
              playsInline
            >
              <source src="/661d4f6d81ac1042b721396c_673ea9f10353f48a685fd1fc_SOshie_Landing_from_Martynas-transcode.mp4" />
              <source src="/661d4f6d81ac1042b721396c_673ea9f10353f48a685fd1fc_SOshie_Landing_from_Martynas-transcode.webm" />
            </video>
          </div>
          <div className="home-brain_soshie-overlay"></div>
        </div>
      </div>
      <div className="home-brain-content hidden">
        <div className="padding-global">
          <div className="container-large padding-section-large padding-bottom">
            <div className="home-brain_content-grid">
              <div className="home-brain_card">
                <img
                  src="/66b36992bcde1421c51a30f5_Sintra-X.avif"
                  alt=""
                  className="home-brain_card-image"
                />
                <div className="margin-top margin-medium">
                  <p className="text-size-lg">
                    Improves over time.
                    <span className="text-style-muted">
                      That can complete tasks for you, even while you sleep. All
                      to save your most valuable asset – your time.
                    </span>
                  </p>
                </div>
              </div>
              <div className="home-brain_card">
                <img
                  src="/66b36992bcde1421c51a30f5_Sintra-X.avif"
                  alt=""
                  className="home-brain_card-image"
                />
                <div className="margin-top margin-medium">
                  <p className="text-size-lg">
                    Remembers files, websites, facts.
                    <span className="text-style-muted">
                      That can complete tasks for you, even while you sleep. All
                      to save your most valuable asset – your time.
                    </span>
                  </p>
                </div>
              </div>
              <div className="home-brain_card">
                <img
                  src="/66b36992bcde1421c51a30f5_Sintra-X.avif"
                  alt=""
                  className="home-brain_card-image"
                />
                <div className="margin-top margin-medium">
                  <p className="text-size-lg">
                    Asks guided questions.
                    <span className="text-style-muted">
                      That can complete tasks for you, even while you sleep. All
                      to save your most valuable asset – your time.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
