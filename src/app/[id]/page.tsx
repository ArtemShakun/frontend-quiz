import '../../styles/index.scss';
import { Header } from '@/components/common/header/header';
import { mockData } from './mockData';
import { QuizPage } from '@/components/pages/quiz-page/quiz-page';

export default function Home({ params }: { params: { id: string } }) {
  return (
    <>
      <Header logo={mockData.pageIcon} />
      <QuizPage quiz={mockData.quiz} />
    </>
  );
}
