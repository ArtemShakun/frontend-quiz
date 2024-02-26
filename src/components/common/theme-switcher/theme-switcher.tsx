'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function ThemeSwitcher() {
  const [isDark, setDark] = useState(false);
  const sunIcon = isDark ? 'sun-white-icon.svg' : 'sun-grey-icon.svg';
  const moonIcon = isDark ? 'moon-white-icon.svg' : 'moon-grey-icon.svg';

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <section className="theme-switcher">
      <Image
        className="theme-switcher-img"
        src={`/assets/${sunIcon}`}
        alt="icon"
        width={24}
        height={24}
      />
      <label className="switch">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setDark(!isDark)}
        />
        <span className="slider round"></span>
      </label>
      <Image
        className="theme-switcher-img"
        src={`/assets/${moonIcon}`}
        alt="icon"
        width={24}
        height={24}
      />
    </section>
  );
}
