export default function Hero({ children }) {
  return (
    <section data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1400" id="hero" className="hero section">
      {children}
    </section>
  );
}
