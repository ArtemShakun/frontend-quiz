import '../styles/index.scss';
import { Content } from '@/components/pages/home-page/home-page';
import { Header } from '@/components/common/header/header';

const mockData = {
  title: `<h2 style="font-weight: normal;line-height: 100%;">Welcome to the</h2> <h2 style="font-weight: bold;line-height: 100%;">Frontend Quiz!</h2>`,
  subtitle: '<p style="font-style: italic;">Pick a subject to get started.</p>',
  cards: [
    { icon: 'html-icon.svg', title: 'HTML' },
    { icon: 'css-icon.svg', title: 'CSS' },
    { icon: 'js-icon.svg', title: 'JavaScript' },
    { icon: 'accessibility-icon.svg', title: 'Accessibility' },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <Content {...mockData} />
    </>
  );
}
