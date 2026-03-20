import Link from "next/link";
import Hero from "@/content/hero";

export default function NotFound() {
  return (
    <Hero>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h1>Not Found</h1>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
          </div>
        </div>
      </div>
    </Hero>
  );
}
