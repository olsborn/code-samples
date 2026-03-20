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
              <h1>Gallery</h1>
              <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
              <br />
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
