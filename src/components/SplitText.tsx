type Props = {
  text: string;
  spansClassName: string;
  wrapperClassName?: string;
  to: "words" | "chars";
};

const SplitText = ({ text, spansClassName, to, wrapperClassName }: Props) => {
  const splitter = to == "words" ? " " : "";
  return text.split(splitter).map((word, i) => {
    if (wrapperClassName) {
      return (
        <p className={`${wrapperClassName}`} key={i}>
          <span className={`inline-block ${spansClassName}`}>{word}</span>
        </p>
      );
    }
    return (
      <span className={`inline-block ${spansClassName}`} key={i}>
        {word}
      </span>
    );
  });
};

export default SplitText;
