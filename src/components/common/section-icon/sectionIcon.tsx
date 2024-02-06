type PropsSectionIconType = {
  letter: string;
};

export function SectionIcon({ letter }: PropsSectionIconType) {
  return <span className="section-item">{letter}</span>;
}
