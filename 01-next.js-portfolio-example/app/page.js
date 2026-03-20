import Hero from "@/content/hero";
import Gallery from "@/content/gallery";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>
                <span>I&apos;m </span>
                <span className="underlight">Jenny Wilson</span> a Professional<span> Photographer from New York City</span>
              </h2>
              <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
              <Link href="/contact" className="btn-get-started">
                Available for Hire
              </Link>
            </div>
          </div>
        </div>
      </Hero>
      <Gallery />
    </>
  );
}
