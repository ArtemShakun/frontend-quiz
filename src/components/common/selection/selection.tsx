'use client';
import Image from 'next/image';

type PropsSelectionType = {
  icon: string;
  title: string;
  url?: string;
};

export function Selection(item: PropsSelectionType) {
  const { icon, title } = item;

  return (
    <div className="selection">
      <Image
        className="selection__img"
        src={`/assets/${icon}`}
        alt="icon"
        width={56}
        height={56}
      />
      <h2 className="selection__text h4">{title}</h2>
    </div>
  );
}
