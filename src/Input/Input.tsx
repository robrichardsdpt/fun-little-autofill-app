import { ChangeEventHandler } from "react";
import "./Input.css";

type TextInputProps = {
  labelString: string;
  valueString: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  focusHandler: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({
  labelString,
  valueString,
  handleChange,
  focusHandler,
}: TextInputProps) => {
  return (
    <div className={"input-container"}>
      <label className={`${valueString !== "" ? " filled" : ""}`}>
        {labelString}
      </label>
      <input
        value={valueString}
        onChange={handleChange}
        onFocus={focusHandler}
      />
    </div>
  );
};

export default TextInput;
