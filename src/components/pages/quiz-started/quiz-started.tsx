import { ProgressBar } from '@/components/common/progress_bar/progress_bar';
import { SelectionQuiz } from '@/components/common/section-quiz/section-quiz';

type QuizItem = {
  id: number;
  answer: string;
  question: string;
  options: QuizOptions[];
};

type QuizOptions = {
  id: number;
  variant: string;
};

type PropsSelectionType = {
  currentQuizIndex: number;
  currentQuestion: QuizItem;
  selectedAnswer: number | null;
  showResult: boolean;
  checked: boolean;
  handleSelection: (id: number) => void;
  errorMsg: boolean;
  checkAnswer: () => void;
  nextStep: () => void;
};

export function QuizStarted({
  currentQuizIndex,
  currentQuestion,
  selectedAnswer,
  showResult,
  checked,
  handleSelection,
  errorMsg,
  checkAnswer,
  nextStep,
}: PropsSelectionType) {
  const variantsLetter = ['A', 'B', 'C', 'D'];

  return (
    <>
      <section>
        <p style={{ fontStyle: 'italic' }}>
          Question {currentQuizIndex + 1} of 10
        </p>
        <div className="content__title h4">{currentQuestion.question}</div>
        <ProgressBar progress={currentQuizIndex + 1} />
      </section>
      <section>
        {currentQuestion.options.map((option, index) => (
          <SelectionQuiz
            key={option.id}
            id={option.id}
            variant={option.variant}
            letter={variantsLetter[index]}
            isSelected={selectedAnswer === option.id}
            isCorrect={showResult && option.variant === currentQuestion.answer}
            handleSelection={handleSelection}
            disabled={showResult}
          />
        ))}
        <button className="btn h4" onClick={!checked ? checkAnswer : nextStep}>
          {!checked ? 'Submit Answer' : 'Next Question'}
        </button>
        {errorMsg && <p className="content__error">Please select answer</p>}
      </section>
    </>
  );
}
