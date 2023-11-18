import "./Button.scss";
import { useState } from "react";

export default function Button(props) {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  if (props.isFilterForm === true) {
    return (
      <button
        className={`filter ${isActive ? "filter--active" : ""}`}
        onClick={handleClick}
      >
        {props.text}
      </button>
    );
  } else {
    return null;
  }
}
