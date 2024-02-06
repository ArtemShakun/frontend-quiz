import { Button } from '@/components/common/button/button';
import { Selection } from '@/components/common/selection/selection';
import { ThemeSwitcher } from '@/components/common/theme-switcher/theme-switcher';
import html from '@/assets/html-icon.svg';
import { Header } from '../header/header';

type Card = {
  icon: string;
  title: string;
};

type PropsContentType = {
  title?: string;
  subtitle?: string;
  cards?: Card[];
};

export function Content(data: PropsContentType) {
  const { title, subtitle, cards } = data;

  return (
    <main className="content">
      <section>
        <h1 className="h2">{title}</h1>
        <p className="italic">{subtitle}</p>
      </section>
      <section>
        {cards?.map(item => (
          <Selection {...item} key={item.title} />
        ))}
      </section>
    </main>
  );
}
