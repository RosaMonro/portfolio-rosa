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
        className={`button-filter ${isActive ? "button-filter--active" : ""}`}
        onClick={handleClick}
        alt={props.text}
      >
        {props.text}
      </button>
    );
  } else if (props.isIconForm === true) {
    return <button className="button-icon">{props.icon}</button>;
  }
}
