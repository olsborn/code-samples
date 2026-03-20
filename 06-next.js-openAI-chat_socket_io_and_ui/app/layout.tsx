import { cookies } from 'next/headers';
import './globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme');
  const theme = themeCookie ? themeCookie.value : 'dark';

  return (
    <html lang="en">
      <head>
        <link href="/favicon.png" type="image/png" rel="icon" />
        <title>AT :: AI Chat Assistant</title>
      </head>
      <body data-theme={theme}>{children}</body>
    </html>
  );
}
