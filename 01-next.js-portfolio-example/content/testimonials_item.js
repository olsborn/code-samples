import Image from "next/image";

export default function TestimonialsItem({ image, name, title, text }) {
  return (
    <div className="testimonial-item">
      <div className="stars">
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
      </div>
      <p>{text}</p>
      <div className="profile mt-auto">
        <Image src={image} className="testimonial-img" alt="" width={100} height={90} />
        <h3>{name}</h3>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
