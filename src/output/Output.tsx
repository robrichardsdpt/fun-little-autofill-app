import { PersonMap } from "../Home/Home";
import "./Output.css";

type OutputParams = {
  searchResults: PersonMap[];
  setValueOnClick: Function;
  // onClickHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const Output = ({ searchResults, setValueOnClick }: OutputParams) => {
  const values = searchResults.map((item: PersonMap, index: number) => (
    <div
      key={index}
      className={
        index % 2 === 0 ? "output__item-primary" : "output__item-secondary"
      }
      style={{ color: item.color }}
      onClick={() => setValueOnClick(item.name)}
    >
      {item.name}
    </div>
  ));
  return <div className="output__container">{values}</div>;
};

export default Output;
