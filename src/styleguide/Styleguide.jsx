import "./Styleguide.scss";
// import Filter from "../componentes/MyBtns/Filter/Filter";
import Icon from "../componentes/Icon/Icon";
import Link from "../componentes/Links/Link";
import Button from "../componentes/Buttons/Button";

export default function Styleguide() {
  return (
    <div className="sg__body">
      <h1>GUÍA DE ESTILOS</h1>
      <h2>Colores y tipografía</h2>

      <div className="sg__colorandtypo">
        <section className="sg__color-palette">
          <div className="sg__pink-section">
            <div className="sg__color-box sg__color-fucsia-darken"></div>
            <div className="sg__color-box sg__color-fucsia"></div>
          </div>
          <div className="sg__grey-section">
            <div className="sg__color-box sg__color-black"></div>
            <div className="sg__color-box sg__color-grey"></div>
            <div className="sg__color-box sg__color-white"></div>
          </div>
        </section>

        <section className="sg__typo">
          <div className="sg__typo--headers">
            <h1 className="m-none">H1 - Título</h1>
            <h2 className="m-none">H2 - Título</h2>
            <h3 className="m-none">H3 - Título</h3>
            <h4 className="m-none">H4 - Título</h4>
            <h5 className="m-none">H5 - Título</h5>
          </div>
        </section>
      </div>

      <h2>Enlaces y botones</h2>

      <div className="sg__mylinks">
        <div className="sg__linksandbtns">
          <section className="sg__links">
            <Link isBtnForm={true} text="Haz hover"></Link>
            <Link isLinkForm={true} text="Soy un link"></Link>
            <Link
              isIconForm={true}
              icon={
                <Icon
                  size={"medium"}
                  isHoverable={true}
                  isAnimated={true}
                  color="fucsia"
                  name={"IconUpArrow"}
                  alt="leer más"
                ></Icon>
              }
            ></Link>
          </section>
          <section className="sg__btns">
            <Button isFilterForm={true} text="Haz click"></Button>
          </section>
        </div>
      </div>
    </div>
  );
}
