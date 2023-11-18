import { Route, Routes } from "react-router-dom";
import Styleguide from "./styleguide/Styleguide";
import Home from "./Views/Home";
import "./scss/global.scss";

function App() {
  return (
    <>
      <body>
        <Routes>
          <Route path="/Styleguide" element={<Styleguide />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </body>
    </>
  );
}
export default App;
