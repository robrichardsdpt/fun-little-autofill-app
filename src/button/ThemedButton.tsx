import { MouseEventHandler } from "react";
import "./ThemedButton.css";

type ThemedButtonProps = {
  message: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  colorTheme: string;
};

const ThemedButton = ({
  message,
  colorTheme,
  handleClick,
}: ThemedButtonProps) => {
  const className = `${colorTheme}__btn`;
  return (
    <button className={className} onClick={handleClick}>
      {message}
    </button>
  );
};

export default ThemedButton;
