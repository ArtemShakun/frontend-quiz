'use client';
import { Selection } from '@/components/common/selection/selection';
import Link from 'next/link';

type Card = {
  icon: string;
  title: string;
};

type PropsContentType = {
  title: string;
  subtitle: string;
  cards?: Card[];
};

export function Content(data: PropsContentType) {
  const { title, subtitle, cards } = data;

  return (
    <main className="content">
      <div className="bg"></div>
      <section className="content__block">
        <div
          className="content__title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        <div
          className="content__subtitle"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></div>
      </section>
      <section className="content__section">
        {cards?.map(item => (
          <Link href={item.title} key={item.title}>
            <Selection {...item} />
          </Link>
        ))}
      </section>
    </main>
  );
}
