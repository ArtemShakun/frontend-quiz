type QuizCompletedProps = {
  score: number;
  setScore: (num: number) => void;
  resetQuiz: () => void;
  setCurrentQuizIndex: (num: number) => void;
};

export function QuizCompleted({
  score,
  setScore,
  resetQuiz,
  setCurrentQuizIndex,
}: QuizCompletedProps) {
  const handleResetOptions = () => {
    setCurrentQuizIndex(0);
    setScore(0);
  };

  return (
    <>
      <section>
        <h2 className="h2" style={{ fontWeight: 400 }}>
          Quiz completed
        </h2>
        <h3 className="h2" style={{ fontWeight: 700 }}>
          You scored...
        </h3>
      </section>
      <section className="result">
        <div className="result__block">
          <div className="result__block-inf">
            <h4 className="result__block-inf-title h4">Accessibility</h4>
            <h1 className="h1">{score}</h1>
            <p className="result__block-inf-subtitle">out of 10</p>
          </div>
        </div>
        <button className="btn h4" onClick={handleResetOptions}>
          Play Again
        </button>
      </section>
    </>
  );
}
