import Image from 'next/image';

type PropsSelectionType = {
  url: string;
  text: string;
  icon?: string;
};

export function Selection({ url, text, icon }: PropsSelectionType) {
  return (
    <div className="selection">
      <Image src={url} alt="icon" className="selection__img" />
      <h2 className="selection__text h4">{text}</h2>
      {icon && <Image src={icon} alt="icon" />}
    </div>
  );
}
