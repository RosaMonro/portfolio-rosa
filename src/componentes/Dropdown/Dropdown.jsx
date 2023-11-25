import "./Dropdown.scss";
import Button from "../Buttons/Button";
import Icon from "../Icon/Icon";
import { useState } from "react";

export default function Home(props) {
  const [expanded, setExpanded] = useState(true);
  const handleButtonClick = () => {
    setExpanded(!expanded);
    console.log("expanded:", expanded);
  };

  return (
    <>
      <div className="dropdown-box">
        <h2 className="h4 font-montse">{props.title}</h2>
        <p>{expanded ? props.description : props.abstractDescription}</p>
        <Button
          isIconForm={true}
          onClick={handleButtonClick}
          icon={
            expanded ? (
              <Icon
                size={"medium"}
                isHoverable={true}
                isAnimated={false}
                color="fucsia"
                name={"IconLess"}
                alt="leer más"
              ></Icon>
            ) : (
              <Icon
                size={"medium"}
                isHoverable={true}
                isAnimated={false}
                color="fucsia"
                name={"IconMore"}
                alt="leer más"
              ></Icon>
            )
          }
        ></Button>
      </div>
    </>
  );
}
