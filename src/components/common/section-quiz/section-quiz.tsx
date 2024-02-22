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
  return (
    <div
      className={`selection-quiz ${isSelected ? 'active' : ''} 
      ${disabled && isSelected && !isCorrect ? 'incorrect' : ''}
      ${isCorrect ? 'correct' : ''}
      `}
      onClick={() => handleSelection(id)}
    >
      <span className={`selection-quiz__letter ${isSelected} h4`}>
        {letter}
      </span>
      <h2 className="selection-quiz__text h4">{variant}</h2>
    </div>
  );
}
