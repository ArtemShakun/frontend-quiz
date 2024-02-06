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
      <Image src={icon} alt="icon" className="selection__img" />
      <h2 className="selection__text h4">{title}</h2>
      {icon && <Image src={icon} alt="icon" />}
    </div>
  );
}
