import '../styles/index.scss';
import { Content } from '@/components/pages/home-page/home-page';
import { Header } from '@/components/pages/header/header';

const mockData = {
  title: 'Welcome to the Frontend Quiz!',
  subtitle: 'Pick a subject to get started.',
  cards: [
    { icon: '', title: 'HTML' },
    { icon: '', title: 'CSS' },
    { icon: '', title: 'JavaScript' },
    { icon: '', title: 'Accessibility' },
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
