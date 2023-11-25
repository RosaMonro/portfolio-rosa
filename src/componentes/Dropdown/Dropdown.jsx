import "./Dropdown.scss";
import Button from "../Buttons/Button";
import Icon from "../Icon/Icon";

export default function Home(props) {
  return (
    <>
      <div className="dropdown-box">
        <h2 className="h4 font-montse">{props.title}</h2>
        <p>{props.text}</p>
        <Button
          isIconForm={true}
          icon={
            <Icon
              size={"medium"}
              isHoverable={true}
              isAnimated={false}
              color="fucsia"
              name={"IconMore"}
              alt="leer más"
            ></Icon>
          }
        ></Button>
      </div>
    </>
  );
}
