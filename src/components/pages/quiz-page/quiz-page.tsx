'use client';
import { Button } from '@/components/common/button/button';
import { ProgressBar } from '@/components/common/progress_bar/progress_bar';
import { SelectionQuiz } from '@/components/common/section-quiz/section-quiz';
import { Selection } from '@/components/common/selection/selection';
import { useEffect, useState } from 'react';

type PropsQuizType = {
  quiz: QuizItem[];
};

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

export function QuizPage({ quiz }: PropsQuizType) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const currentQuestion = quiz[currentQuizIndex];
  const variantsLetter = ['A', 'B', 'C', 'D'];

  const handleSelection = (id: number | null) => {
    setSelectedAnswer(id);
  };

  const checkAnswer = () => {
    setShowResult(true);
    setChecked(true);
  };

  const nextStep = () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
    resetQuiz();
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setChecked(false);
    setShowResult(false);
  };

  return (
    <main className="content">
      <span className="bg"></span>
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
            isCorrect={showResult && option.id === currentQuestion.id}
            handleSelection={handleSelection}
            disabled={showResult}
          />
        ))}
        <button className="btn h4" onClick={!checked ? checkAnswer : nextStep}>
          {!checked ? 'Submit Answer' : 'Next Question'}
        </button>
      </section>
    </main>
  );
}
