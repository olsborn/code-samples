import Link from "next/link";
import Image from "next/image";

export default function Article({ href, src, title, description }) {
  return (
    <article
      className="thumb"
      data-aos="fade-up"
      data-aos-delay={0}
      data-aos-easing="ease-out-cubic"
      data-aos-duration="600"
    >
      <Link className="image glightbox" href={href}>
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </Link>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}
