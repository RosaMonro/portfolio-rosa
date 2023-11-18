import "./Link.scss";

export default function Link(props) {
  if (props.isBtnForm === true) {
    return (
      <a
        href={props.url}
        className="btn"
        target={props.target ? props.target : "_self"}
      >
        {props.text}
      </a>
    );
  } else if (props.isLinkForm === true) {
    return (
      <a
        href={props.url}
        className="link"
        target={props.target ? props.target : "_self"}
      >
        {props.text}
      </a>
    );
  } else if (props.isIconForm === true) {
    return (
      <a
        href={props.url}
        className="icon"
        target={props.target ? props.target : "_self"}
      >
        {props.icon}
        {props.text}
      </a>
    );
  } else {
    return null;
  }
}
