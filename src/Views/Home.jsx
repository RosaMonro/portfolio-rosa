import "./Home.scss";
import Nav from "../componentes/Nav/Nav";
import Link from "../componentes/Links/Link";

export default function Home() {
  return (
    <>
      <header>
        <div className="nav">
          <Nav></Nav>
        </div>
        <div className="header">
          <div className="header__titles">
            <h2 className="m-none h1 font-montse">
              ROSA <br />
              MONTERO
            </h2>
            <h1 className="m-none h2 header__titles__subtitle font-gruppo">
              UX DESIGNER
            </h1>
          </div>
          <div className="header__p">
            <p>
              Comencé mi viaje como neuropsicóloga, pero mi curiosidad y deseo
              de brindar experiencias significativas a mis pacientes me
              condujeron al mundo de la Experiencia de Usuario y Desarrollo Web.
            </p>
            <p>
              Actualmente sigo desarrollando habilidades en backend, frontend y
              experiencia de usuario para ofrecer una visión y integral una
              perspectiva holística del proceso de creación de produtos
              digitales.
            </p>
          </div>
          <div className="header__links">
            <Link isBtnForm={true} text="Sobre mí"></Link>
            <Link isBtnForm={true} text="Mi trabajo"></Link>
          </div>
        </div>
      </header>

      <section className="m-sections">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit id eu lacinia,
          vehicula mauris dapibus vitae nullam blandit consequat himenaeos ante,
          per ac imperdiet metus hendrerit iaculis turpis velit pellentesque.
          Morbi eros aliquet est sollicitudin facilisi lectus convallis vel
          vehicula ac molestie, mi mus fermentum fames risus scelerisque augue
          odio rhoncus posuere. Habitant tempor tellus convallis venenatis nisl
          inceptos scelerisque proin luctus congue rhoncus, rutrum per dui quam
          ac faucibus metus facilisis curabitur aliquam, libero montes interdum
          feugiat phasellus vitae viverra orci placerat aenean. Vel mollis morbi
          sociosqu ornare feugiat montes neque mi interdum diam gravida et
          habitasse, sollicitudin viverra pulvinar lacinia convallis vulputate
          arcu lobortis tempor habitant tellus enim. Laoreet ligula nascetur
          pulvinar ullamcorper pellentesque fusce id facilisis, vulputate odio
          platea fermentum libero dui curabitur vivamus, natoque dictum sapien
          luctus arc
        </p>
      </section>
    </>
  );
}
