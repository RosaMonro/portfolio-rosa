import { Route, Routes } from "react-router-dom";
import Styleguide from "./styleguide/Styleguide";
import Home from "./Views/Home";
import Footer from "./componentes/Footer/Footer";
import "./scss/global.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Styleguide" element={<Styleguide />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
