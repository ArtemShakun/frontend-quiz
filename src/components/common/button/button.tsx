type PropsButtonType = {
  text?: string;
};

export function Button({ text = 'Submit Answer' }: PropsButtonType) {
  return <button className="btn h4">{text}</button>;
}
