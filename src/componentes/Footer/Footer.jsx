import Icon from "../Icon/Icon";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <h2 className="m-none h3 footer__titles font-gruppo border-b">
          Contáctame
        </h2>
        <ul className="footer__ul">
          <li>
            <Icon
              size={"mini"}
              color="fucsia"
              name={"IconHome"}
              alt="Ir a la página principal"
            ></Icon>
            <a href="">rosamaria.monro@gmail.com</a>
          </li>
          <li>
            <Icon
              size={"mini"}
              color="fucsia"
              name={"IconHome"}
              alt="Ir a la página principal"
            ></Icon>
            <a href="">600648799</a>
          </li>
          <li>
            <Icon
              size={"mini"}
              color="fucsia"
              name={"IconHome"}
              alt="Ir a la página principal"
            ></Icon>
            <a href="">Visita mi perfil</a>
          </li>
        </ul>
      </section>
    </>
  );
}
