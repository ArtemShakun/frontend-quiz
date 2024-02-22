type ProgressBarProps = {
  progress: number;
};

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__completed"
        style={{ width: `${progress}0%` }}
      ></div>
    </div>
  );
}
