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
              size={"micro"}
              color="fucsia"
              name={"IconMail"}
              alt="Ir a la página principal"
            ></Icon>
            <a
              href="mailto:rosamaria.monro@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              // Al agregar rel="noopener noreferrer", estás asegurándote de que el nuevo documento no tenga acceso al objeto window.opener y estás reduciendo el riesgo de posibles ataques.
              className="font-gruppo color-black"
            >
              rosamaria.monro@gmail.com
            </a>
          </li>
          <li>
            <Icon
              size={"micro"}
              color="fucsia"
              name={"IconPhone"}
              alt="Ir a la página principal"
            ></Icon>
            <p className="font-gruppo color-black footer-p">600648799</p>
          </li>
          <li>
            <Icon
              size={"micro"}
              color="fucsia"
              name={"IconLinkedin"}
              alt="Ir a la página principal"
            ></Icon>
            <a
              href="https://www.linkedin.com/in/rosamariamonteroroman/"
              target="_blank"
              rel="noopener noreferrer"
              // Al agregar rel="noopener noreferrer", estás asegurándote de que el nuevo documento no tenga acceso al objeto window.opener y estás reduciendo el riesgo de posibles ataques.
              className="font-gruppo color-black"
            >
              Visita mi perfil
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
