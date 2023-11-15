import "./btn.scss";

export default function Btn(props) {
  return (
    <a href={props.url} className="btn">
      {props.text}
    </a>
  );
}
