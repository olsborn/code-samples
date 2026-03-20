import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/400.css';

import './fontawesome-all.min.css';
import './main.css';

import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import Body from '@/components/Body';
import Wrapper from '@/components/Wrapper';

export const metadata = {
  charset: 'utf-8',
  title: 'AT Blog Example',
  description:
    'AT Blog Example is your source for web development tutorials, design inspiration, and the latest trends in technology. Explore articles on React, Next.js, UI/UX, and creative coding.',
  keywords:
    'web development, blog, React, Next.js, JavaScript, CSS, UI/UX, tutorials, coding, design, technology, inspiration, creative, frontend, programming, tips',
  author: 'Alex T.',
  robots: 'index, follow',
  generator: 'Next.js',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.png" type="image/png" rel="icon" />
        <link href="/favicon.png" type="image/png" rel="apple-touch-icon" />
        <meta property="og:title" content="Quantum Pixel Odyssey" />
        <meta
          property="og:description"
          content="Discover the future of web design with Quantum Pixel Odyssey."
        />
        <meta property="og:type" content="website" />
      </head>
      <Body>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
        <MobileMenu />
      </Body>
    </html>
  );
}
