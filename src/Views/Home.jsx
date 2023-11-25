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
        <h2 className="m-none h3 header__titles__subtitle font-gruppo border-b">
          Sobre mí
        </h2>
        <div className="dropdowns">
          <Dropdown
            title="UX/UI"
            abstractDescription="orem ipsum dolor sit amet consectetur adipiscing elit habitasse, at t"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit habitasse, at tellus curabitur curae aliquam morbi tempor class, id aptent facilisi per ullamcorper egestas nisi. Etiam molestie velit dictumst fermentum porta habitant sapien himenaeos proin gravida curae fringilla pellentesque inceptos primis, eleifend ultrices aptent facilisi varius nullam curabitur bibendum ac tristique litora faucibus senectus. Commodo dis molestie consequat laoreet suspendisse arcu enim, potenti nibh pretium elementum vestibulum donec porta porttitor, iaculis scelerisque ad dignissim fusce maecenas."
          ></Dropdown>
          <Dropdown
            title="Frontend-UI"
            abstractDescription="orem ipsum dolor sit amet consectetur adipiscing elit habitasse, at t"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit habitasse, at tellus curabitur curae aliquam morbi tempor class, id aptent facilisi per ullamcorper egestas nisi. Etiam molestie velit dictumst fermentum porta habitant sapien himenaeos proin gravida curae fringilla pellentesque inceptos primis, eleifend ultrices aptent facilisi varius nullam curabitur bibendum ac tristique litora faucibus senectus. Commodo dis molestie consequat laoreet suspendisse arcu enim, potenti nibh pretium elementum vestibulum donec porta porttitor, iaculis scelerisque ad dignissim fusce maecenas."
          ></Dropdown>
          <Dropdown
            title="Neurociencia"
            abstractDescription="orem ipsum dolor sit amet consectetur adipiscing elit habitasse, at t"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit habitasse, at tellus curabitur curae aliquam morbi tempor class, id aptent facilisi per ullamcorper egestas nisi. Etiam molestie velit dictumst fermentum porta habitant sapien himenaeos proin gravida curae fringilla pellentesque inceptos primis, eleifend ultrices aptent facilisi varius nullam curabitur bibendum ac tristique litora faucibus senectus. Commodo dis molestie consequat laoreet suspendisse arcu enim, potenti nibh pretium elementum vestibulum donec porta porttitor, iaculis scelerisque ad dignissim fusce maecenas."
          ></Dropdown>
        </div>
      </section>
    </>
  );
}
