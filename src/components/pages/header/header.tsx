import Image from 'next/image';

type PropsHeaderType = {
  icon?: string;
  title?: string;
  theme?: (value: boolean) => boolean;
};

export function Header({ icon, title }: PropsHeaderType) {
  return (
    <header>
      <section>
        <Image src="../assets" alt="icon" />
        <h1>{title}</h1>
      </section>
      <section>
        <Image src="../assets" alt="icon" />
        <label className="switch">
          <input type="checkbox" checked={true} />
          <span className="slider round"></span>
        </label>
        <Image src="../assets" alt="icon" />
      </section>
    </header>
  );
}
