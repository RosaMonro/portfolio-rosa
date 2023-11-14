import "./Styleguide.scss";

export default function Styleguide() {
  return (
    <>
      <body className="sg__body">
        <h1>GUÍA DE ESTILOS</h1>

        <section className="sg__color-palette">
          <h2>Paleta de colores</h2>
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
          <h2>Tipografía</h2>
          <div className="sg__typo--headers">
            <h1>H1 - Soy un encabezado</h1>
            <h2>H2 - Soy un encabezado</h2>
            <h3>H3 - Soy un encabezado</h3>
            <h4>H4 - Soy un encabezado</h4>
            <h5>H5 - Soy un encabezado</h5>
            <h6>H6 - Soy un encabezado</h6>
          </div>
        </section>
      </body>
    </>
  );
}
