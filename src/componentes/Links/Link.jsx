import "./Link.scss";

export default function Link(props) {
  if (props.isBtnForm === true) {
    return (
      <a
        href={props.url}
        className="link-btn"
        target={props.target ? props.target : "_self"}
        alt={props.text}
      >
        {props.text}
      </a>
    );
  } else if (props.isLinkForm === true) {
    return (
      <a
        href={props.url}
        className="link-link"
        target={props.target ? props.target : "_self"}
        alt={props.text}
      >
        {props.text}
      </a>
    );
  } else if (props.isIconForm === true) {
    return (
      <a
        href={props.url}
        className="link-icon"
        target={props.target ? props.target : "_self"}
      >
        {props.icon}
      </a>
    );
  } else {
    return null;
  }
}
