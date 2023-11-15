import { useState } from "react";
import "./Filter.scss";

export default function Filter(props) {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <button
      className={`filter ${isActive ? "filter--active" : ""}`}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
}
