import { ThemeSwitcher } from '@/components/common/theme-switcher/theme-switcher';
import Image from 'next/image';
import Link from 'next/link';

type PropsHeaderType = {
  logo?: { icon: string; title: string };
};

export function Header({ logo }: PropsHeaderType) {
  return (
    <header className="header">
      <section className="header__title">
        <>
          {logo?.icon && (
            <Link href="/" className="link">
              <Image
                className="header__img"
                src={`/assets/${logo.icon}`}
                alt={logo.title}
                width={56}
                height={56}
              />
              <span className="header__title-text">{logo.title}</span>
            </Link>
          )}
        </>
      </section>

      <section className="header__switcher">
        <ThemeSwitcher />
      </section>
    </header>
  );
}
