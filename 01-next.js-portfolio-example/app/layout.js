import { Roboto, Cardo, Inter } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

import "./bootstrap.min.css";
import "./bootstrap-icons.css";
import "./main.css";
import Header from "@/content/header";
import Footer from "@/content/footer";
import ScrollTop from "@/content/scrolltop";
import ClientAOS from "@/content/ClientAOS";

export const metadata = {
  charset: "utf-8",
  title: "AT Quantum Pixel Odyssey",
  description: "Embark on a journey through digital landscapes, exploring vibrant colors and innovative design concepts.",
  keywords: "quantum, pixel, odyssey, digital, design, vibrant, creative, journey, innovation, colors",
  author: "Alex Randomson",
  robots: "index, follow",
  generator: "Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/img/favicon.png" type="image/png" rel="icon" />
        <link href="/assest/img/apple-touch-icon.png" type="image/png" rel="apple-touch-icon" />
        <meta property="og:title" content="Quantum Pixel Odyssey" />
        <meta property="og:description" content="Discover the future of web design with Quantum Pixel Odyssey." />
        <meta property="og:type" content="website" />
      </head>
      <body className="index-page">
        <Header />
        <main className="main">{children}</main>
        <Footer />
        <ScrollTop />
        <ClientAOS />
      </body>
    </html>
  );
}
