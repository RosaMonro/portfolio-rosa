import "./Styleguide.scss";
import Btn from "../componentes/MyLinks/Btn/Btn";

export default function Styleguide() {
  return (
    <body className="sg__body">
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

      <h2>Botones y enlaces</h2>

      <div className="sg__mylinks">
        <section className="sg__mylinks-btn">
          <Btn text="Enlace"></Btn>
        </section>
      </div>
    </body>
  );
}
