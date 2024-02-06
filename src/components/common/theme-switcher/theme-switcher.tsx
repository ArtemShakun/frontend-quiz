'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import sunG from '@/assets/sun-grey-icon.svg';
import sunW from '@/assets/sun-white-icon.svg';
import moonG from '@/assets/moon-grey-icon.svg';
import moonW from '@/assets/moon-white-icon.svg';

export function ThemeSwitcher() {
  const [isDark, setDark] = useState(false);
  const sunIcon = isDark ? sunW : sunG;
  const moonIcon = isDark ? moonW : moonG;
  console.log(isDark);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <section className="theme-switcher">
      <Image src={sunIcon} alt="icon" />
      <label className="switch">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setDark(!isDark)}
        />
        <span className="slider round"></span>
      </label>
      <Image src={moonIcon} alt="icon" />
    </section>
  );
}
