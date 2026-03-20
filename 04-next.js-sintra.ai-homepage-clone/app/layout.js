import "./sintraweb.shared.43812932b.min.css";
import "./Header.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  charset: "utf-8",
  title: "AT :: CLONE - Sintra",
  description:
    "Build, grow, and scale your business with a team that never sleeps.",
  robots: "index, follow",
  generator: "Next.js",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.png" type="image/png" rel="icon" />
        <link href="/favicon.png" type="image/png" rel="apple-touch-icon" />
      </head>
      <body>
        <Header />
        <div className="page-wrapper">
          <div className="main-wrapper">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
