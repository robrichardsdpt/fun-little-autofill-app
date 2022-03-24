import React, { useState } from "react";
import TextInput from "../input/Input";
import { data } from "../fixture/sample";
import Output from "../output/Output";
import "./Home.css";
import ThemedButton from "../button/ThemedButton";
import SnackBar from "../snackbar/SnackBar";

export interface PersonMap {
  name: string;
  color: string;
}

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputColorValue, setInputColorValue] = useState("");
  const [search, setSearch] = useState<Array<PersonMap>>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState<boolean>(false);

  const clearValues = (): void => {
    setInputValue("");
    setInputColorValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOpen(true);
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearch(results);
    setInputValue(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputColorValue(e.target.value);
  };

  const setValueOnClick = (value: string): void => {
    setInputValue(value);
    setSearch(
      data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    const findItem = data.find((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setInputColorValue(findItem ? findItem.color : "");
    setOpen(false);
    return;
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    clearValues();
    setIsSuccessfulSubmit(true);
    setTimeout(() => {
      setIsSuccessfulSubmit(false);
    }, 3000);
  };

  return (
    <div>
      <SnackBar
        message="Successfully added"
        showSnackBar={isSuccessfulSubmit}
      />
      <form className={"home__container"}>
        <TextInput
          labelString="Choose a person"
          valueString={inputValue}
          focusHandler={() => setOpen(true)}
          handleChange={(e) => handleChange(e)}
        />
        {open ? (
          <Output searchResults={search} setValueOnClick={setValueOnClick} />
        ) : (
          <div className="empty-container"></div>
        )}
        <TextInput
          labelString="Pick color"
          valueString={inputColorValue}
          focusHandler={() => {}}
          handleChange={(e) => handleColorChange(e)}
        />

        <ThemedButton
          message={"Submit"}
          colorTheme={"primary"}
          handleClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
};
export default Home;
