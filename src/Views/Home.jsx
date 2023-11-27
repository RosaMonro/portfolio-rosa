import "./Home.scss";
import Nav from "../componentes/Nav/Nav";
import Link from "../componentes/Links/Link";
import Dropdown from "../componentes/Dropdown/Dropdown";

export default function Home() {
  return (
    <>
      <header>
        <Nav></Nav>
        <div className="header">
          <div className="header__titles">
            <h2 className="m-none h1 font-montse">
              ROSA <br />
              MONTERO
            </h2>
            <h1 className="m-none h2 header__titles__subtitle font-gruppo">
              UX DEVELOPER
            </h1>
          </div>
          <div className="header__p">
            <p>
              Comencé mi viaje como neuropsicóloga, pero mi curiosidad y deseo
              de brindar experiencias significativas a mis pacientes me
              condujeron al mundo de la Experiencia de Usuario y Desarrollo Web.
            </p>
            {/* <p>
              Actualmente sigo desarrollando habilidades en backend, frontend y
              experiencia de usuario para ofrecer una visión y integral una
              perspectiva holística del proceso de creación de produtos
              digitales.
            </p> */}
          </div>
          <div className="header__links">
            <Link isBtnForm={true} text="Sobre mí"></Link>
            <Link isBtnForm={true} text="Mi trabajo"></Link>
          </div>
        </div>
      </header>

      <section className="m-sections">
        <h2 className="m-none h3 header__titles__subtitle font-gruppo border-b">
          Sobre mí
        </h2>
        <div className="dropdowns">
          <Dropdown
            title="UX/UI"
            abstractDescription="Especialmente interesada en lo que la neurociencia y el neurodiseño pueden hacer por la creación de productos digitales centrados en el usuario que satisfagan las necesidades de usuarios y clientes."
            description={
              <>
                <p>
                  Especialmente interesada en lo que la neurociencia y el
                  neurodiseño pueden hacer por la creación de productos
                  digitales centrados en el usuario que satisfagan las
                  necesidades de usuarios y clientes.
                </p>
                <p>
                  Trato de mantenerme activa con proyectos personales de
                  rediseño de interfaces con Figma y procuro aplicar mis
                  conocimientos previos en la investigación de usuario, diseño
                  de interacción, pruebas de usuario, etc.
                </p>
                <p>
                  Tanto la psicología como el diseño y desarrollo de interfaces
                  requieren habilidades técnicas y analíticas, la capacidad de
                  identificar patrones de conducta del usuario y una atención
                  meticulosa a los detalles.
                </p>
              </>
            }
          ></Dropdown>
          <Dropdown
            title="Frontend-UI"
            abstractDescription="Siempre en constante aprendizaje, tanto desarrollo frontend como en backend, bajo la premisa de crear código limpio, escalable  y accesible con el uso de buenas prácticas. "
            description={
              <>
                <p>
                  Siempre en constante aprendizaje, tanto desarrollo frontend
                  como en backend, bajo la premisa de crear código limpio,
                  escalable y accesible con el uso de buenas prácticas.
                </p>
                <p>
                  Inicialmente me formé en HTML, CSS y JavaScript en el posgrado
                  de UX/UI, desarrollo frontend y marketing digital en la
                  Escuela Superior de Arte y Tecnología de Valencia. Allí además
                  aprendí el uso de Sass así como la aplicación de la
                  metodología BEM.
                </p>
                <p>
                  Actualmente he comenzado mi andadura a través del mundo
                  backend. Mi objetivo es lograr una comprensión integral del
                  desarrollo para poder aportar soluciones completas y eficaces
                  al equipo.
                </p>
              </>
            }
          ></Dropdown>
          <Dropdown
            title="Neurociencia"
            abstractDescription="Con más de 10 años de experiencia en neurorrehabilitación, la neurociencia ya forma parte
            intrínseca de mí. Ahora busco integrar los principios
            neurocientíficos al diseño y al desarrollo web."
            description={
              <>
                <p>
                  Con más de 10 años de experiencia en neurorrehabilitación, la
                  neurociencia ya forma parte intrínseca de mí. Ahora busco
                  integrar los principios neurocientíficos al diseño y al
                  desarrollo web.
                </p>
                <p>
                  La neuropsicología explica cómo reaccionamos ante diferentes
                  estímulos, generando emociones y configurando la conducta.
                  Entendiendo que nuestro comportamiento está impulsado por
                  procesos neuronales, apreciamos la importancia de éstos en el
                  diseño.
                </p>
                <p>
                  Tengo amplia experiencia en la administración e interpretación
                  de valoraciones cognitivas, análisis de conducta y creación de
                  planes de tratamiento coordinando y colaborando con equipos
                  intradisciplinares.
                </p>
              </>
            }
          ></Dropdown>
        </div>
      </section>
    </>
  );
}
