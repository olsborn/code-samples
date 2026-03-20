import Image from "next/image";
export default function Workspace() {
  return (
    <div className="section_home-workspaces background-color-alternate">
      <div className="padding-global z-index-2">
        <div className="container-large padding-section-large">
          <div className="home-workspaces_spacer"></div>
          <div className="max-width-large breathing-space">
            <div className="margin-bottom margin-large">
              <h2 className="text-size-7xl max-width-medium">
                Multiple workspaces. One AI Team with different AI employees.
              </h2>
            </div>
            <div className="home-workspaces_grid">
              <div>
                <h3 className="text-size-xl">Up to 5 profiles</h3>
                <div className="spacer-xsmall"></div>
                <p className="text-size-lg">
                  <span className="text-style-muted">
                    Create up to 5 business profiles, each customized to your
                    unique business needs and specific goals, powered by AI
                    employees ready to deliver results.
                  </span>
                </p>
              </div>
              <div>
                <h3 className="text-size-xl">Share workspace with the team</h3>
                <div className="spacer-xsmall"></div>
                <p className="text-size-lg">
                  <span className="text-style-muted">
                    Collaborate with your team in real-time. Share your
                    workspace to make business insights accessible to everyone
                    involved.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-workspaces_background">
        <Image
          src="/6735e6a05e6e7f0def9fae4e_workspaces-final-mockup.avif"
          fill
          alt=""
          className="home-workspaces_background-image"
        />
        <div className="home-workspace_background-overlay"></div>
      </div>
    </div>
  );
}
