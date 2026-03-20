import Image from "next/image";
export default function Automation() {
  return (
    <div className="section_home-automations background-color-alternate">
      <div className="home-automations_background">
        <Image
          src="/673f7efdd574ab7ce78808c6_automations-helpers-cover.avif"
          alt=""
          className="home-automations_background-image"
          fill
        />
        <div className="home-automations_background-overlay"></div>
      </div>
      <div className="padding-global">
        <div className="container-medium padding-section-large">
          <div className="text-align-center margin-bottom margin-huge">
            <div className="max-width-large align-center">
              <h2 className="text-size-7xl text-align-center text-size-4xl--mobile">
                Automates work.
                <br />
                Even while you sleep.
              </h2>
              <div className="spacer-medium"></div>
              <p className="text-size-2xl text-style-muted align-center">
                Automate tasks with business automation tools—create social
                media posts, respond to comments, and more—freeing your team
                from repetitive tasks so they can focus on more strategic work.
              </p>
            </div>
          </div>
          <div className="home-automations_grid breathing-space">
            <div
              id="w-node-e7b069d4-3933-9476-e05d-62882093e506-a0cabc6e"
              className="home-automations_card is-soshie"
            >
              <div className="home-automations_card-content">
                <div className="margin-bottom margin-small">
                  <h3 className="text-size-3xl--mobile">
                    Soshie, schedule social media posts for me
                  </h3>
                </div>
                <p className="text-size-xl">
                  <span className="text-style-muted">
                    Automate your social media game with AI for marketing.
                    Write, create, and post content effortlessly with AI-powered
                    solutions.
                  </span>
                </p>
              </div>
              <img
                src="/67477e8395c6fe6685369d24_automation-soshie.avif"
                alt=""
                className="home-automations_card-image"
              />
            </div>
            <div className="home-automations_card is-cassie">
              <div className="home-automations_card-content">
                <div className="margin-bottom margin-small">
                  <h3 className="text-size-3xl--mobile">
                    Cassie, check my Facebook comments
                  </h3>
                </div>
                <p className="text-size-xl">
                  <span className="text-style-muted">
                    Engage your audience with business automation tools. Use AI
                    for customer support to analyze comments and craft
                    personalized responses. By automating comment analysis, your
                    team can focus on building stronger customer relationships.
                  </span>
                </p>
              </div>
              <img
                src="/67477e835d7ac382c6ebb990_automation-cassie.avif"
                alt=""
                className="home-automations_card-image"
              />
            </div>
            <div className="home-automations_card is-vizzy">
              <div className="home-automations_card-content">
                <div className="margin-bottom margin-small">
                  <h3 className="text-size-3xl--mobile">
                    Vizzy, help me prepare for today&#39;s meetings
                  </h3>
                </div>
                <p className="text-size-xl">
                  <span className="text-style-muted">
                    Boost productivity with AI. Streamline business processes
                    with daily summaries based on your email and calendar to
                    keep your schedule on track.
                  </span>
                </p>
              </div>
              <img
                src="/67477e83b8cd1c76d0434bef_automation-vizzy.avif"
                alt=""
                className="home-automations_card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
