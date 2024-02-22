'use client';

type PropsSelectionType = {
  id: number;
  variant: string;
  letter: string;
  isSelected: boolean | null;
  isCorrect: boolean;
  handleSelection: (id: number) => void;
  disabled: boolean;
};

export function SelectionQuiz({
  id,
  variant,
  letter,
  isSelected,
  isCorrect,
  handleSelection,
  disabled,
}: PropsSelectionType) {
  const handleClick = () => {
    if (!disabled) handleSelection(id);
  };

  return (
    <div
      className={`selection-quiz ${isSelected ? 'active' : ''} 
      ${disabled && isSelected && !isCorrect ? 'incorrect' : ''}
      ${isCorrect ? 'correct' : ''}
      `}
      onClick={handleClick}
    >
      <span
        className={`selection-quiz__letter h4 ${
          disabled && isSelected && !isCorrect ? 'incorrect' : ''
        } ${isCorrect ? 'correct' : ''}`}
      >
        {letter}
      </span>
      <h2 className={`selection-quiz__text h4  `}>{variant}</h2>
    </div>
  );
}
