import "@fontsource/source-sans-pro";
import "@fontsource/source-sans-pro/400.css";

import "./fontawesome-all.min.css";
import "./main.css";

import Body from "@/components/Body";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Overlay from "@/components/Overlay";

export const metadata = {
  charset: "utf-8",
  title: "AT Photos :: Responsive Images Gallery",
  description:
    "AT Photos is your source for stunning photography, design inspiration, and the latest trends in visual storytelling. Explore articles on photography techniques, equipment reviews, and creative projects.",
  keywords:
    "photography, gallery, images, visual storytelling, design, inspiration, creative, art, tips",
  author: "Alex Troj.",
  robots: "index, follow",
  generator: "Next.js",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.png" type="image/png" rel="icon" />
        <link href="/favicon.png" type="image/png" rel="apple-touch-icon" />
        <meta
          property="og:title"
          content="AT Photos :: Responsive Images Gallery"
        />
        <meta
          property="og:description"
          content="AT Photos is your source for stunning photography, design inspiration, and the latest trends in visual storytelling. Explore articles on photography techniques, equipment reviews, and creative projects."
        />
        <meta property="og:type" content="website" />
      </head>
      <Body>
        <Wrapper>
          <Header />
          {children}
          <Footer />
        </Wrapper>
        <Overlay />
      </Body>
    </html>
  );
}
