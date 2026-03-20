'use client';
import { useState } from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

export default function ThemeSwitcher({ currentTheme }: { currentTheme: string | undefined }) {
  const [theme, setTheme] = useState(currentTheme || 'dark');

  const HandleSetTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; // 1 year
    document.body.setAttribute('data-bs-theme', newTheme);
  };

  return (
    <div className="d-sm-inline-block">
      <button type="button" className="btn header-item" id="themeswitcher">
        {theme === 'dark' && <Sun data-type="dark" onClick={() => HandleSetTheme()}></Sun>}
        {theme === 'light' && <Moon data-type="light" onClick={() => HandleSetTheme()}></Moon>}
      </button>
    </div>
  );
}
