import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Header({ theme }: { theme: string | undefined }) {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-2 px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link href="/" className="navbar-brand p-0 m-0">
          {theme === 'dark' && (
            <Image
              src={'/logo.png'}
              alt="Logo"
              height={45}
              width={166}
              priority={true}
              style={{ opacity: 0.9 }}
            />
          )}
          {theme === 'light' && (
            <Image
              src={'/logo.png'}
              alt="Logo"
              height={45}
              width={166}
              priority={true}
              style={{ opacity: 0.9 }}
            />
          )}
        </Link>
        <ThemeSwitcher currentTheme={theme} />
      </div>
    </header>
  );
}
