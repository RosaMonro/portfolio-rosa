import Icon from "../Icon/Icon";
import Link from "../Links/Link";
import "./Nav.scss";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <Link
          isIconForm={true}
          icon={
            <Icon
              size={"mini"}
              color="black"
              name={"IconHome"}
              alt="Ir a la página principal"
            ></Icon>
          }
        ></Link>
        <ul>
          <li>
            <a className="font-gruppo color-black" href="">
              Proyectos
            </a>
          </li>
          <li>
            <a className="font-gruppo color-black" href="">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
