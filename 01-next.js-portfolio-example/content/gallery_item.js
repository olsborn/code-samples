import Image from "next/image";
import Link from "next/link";

export default function GalleryItem({ imageSrc, title, delay }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} data-aos-easing="ease-out-cubic" data-aos-duration="600" className="col-xl-3 col-lg-4 col-md-6">
      <div className="gallery-item h-100" style={{ aspectRatio: "4/3" }}>
        <Image src={imageSrc} className="img-fluid" fill alt={title} />
        <div className="gallery-links d-flex align-items-center justify-content-center">
          <Link href={imageSrc} title={title} className="glightbox preview-link">
            <i className="bi bi-arrows-angle-expand"></i>
          </Link>
          <Link href="/gallery-single" className="details-link">
            <i className="bi bi-link-45deg"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
