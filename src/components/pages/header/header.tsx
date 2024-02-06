import { ThemeSwitcher } from '@/components/common/theme-switcher/theme-switcher';
import Image from 'next/image';

type PropsHeaderType = {
  icon?: string;
  title?: string;
};

export function Header({ icon, title }: PropsHeaderType) {
  return (
    <header className="header">
      <section className="header__title">
        <>
          {/* <Image src="../assets" alt="icon" /> */}
          {/* <h1>Hello hell</h1> */}
        </>
      </section>

      <section className="header__switcher">
        <ThemeSwitcher />
      </section>
    </header>
  );
}
