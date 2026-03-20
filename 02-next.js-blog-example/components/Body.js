'use client';

import { usePathname } from 'next/navigation';

export default function Body({ children }) {
  const pathname = usePathname();
  const isSinglePage = pathname.startsWith('/single');

  return <body className={isSinglePage ? 'single' : ''}>{children}</body>;
}
