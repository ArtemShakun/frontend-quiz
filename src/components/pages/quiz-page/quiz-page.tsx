'use client';
import { Button } from '@/components/common/button/button';
import { ProgressBar } from '@/components/common/progress_bar/progress_bar';
import { SelectionQuiz } from '@/components/common/section-quiz/section-quiz';
import { Selection } from '@/components/common/selection/selection';
import { useEffect, useState } from 'react';
import { QuizStarted } from '../quiz-started/quiz-started';
import { QuizCompleted } from '../quiz-page-completed/quiz-completed';

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
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [errorMsg, setErrorMasg] = useState<boolean>(false);

  const currentQuestion = quiz[currentQuizIndex];

  const handleSelection = (id: number | null) => {
    setSelectedAnswer(id);
  };

  const checkAnswer = () => {
    if (selectedAnswer) {
      setShowResult(true);
      setChecked(true);
      const selectedOption = currentQuestion.options.find(
        option => option.id === selectedAnswer,
      );
      if (selectedOption && selectedOption.variant === currentQuestion.answer) {
        setScore(score + 1);
      }
      setErrorMasg(false);
    } else {
      setErrorMasg(true);
    }
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

      {currentQuizIndex === 10 ? (
        <QuizCompleted
          score={score}
          resetQuiz={resetQuiz}
          setCurrentQuizIndex={setCurrentQuizIndex}
        />
      ) : (
        <QuizStarted
          currentQuizIndex={currentQuizIndex}
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          handleSelection={handleSelection}
          checked={checked}
          errorMsg={errorMsg}
          checkAnswer={checkAnswer}
          nextStep={nextStep}
        />
      )}
    </main>
  );
}
