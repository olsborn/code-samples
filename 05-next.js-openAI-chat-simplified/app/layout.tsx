import './bootstrap.min.css';
import { cookies } from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme');
  const theme = themeCookie ? themeCookie.value : 'dark';

  return (
    <html lang="en">
      <head>
        <link href="/favicon.png" type="image/png" rel="icon" />
        <title>AT :: Open AI Chat</title>
      </head>
      <body data-bs-theme={theme}>
        <div
          id="wrapper"
          style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100dvh' }}
        >
          <Header theme={theme} />
          <div className="container-fluid">
            <div>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
