import './globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.png" type="image/png" rel="icon" />
        <title>AI Image Generator Comparison</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
