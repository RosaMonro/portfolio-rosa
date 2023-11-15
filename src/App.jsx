import { Route, Routes } from "react-router-dom";
import Styleguide from "./styleguide/Styleguide";
import "./scss/global.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Styleguide" element={<Styleguide />} />
      </Routes>
    </>
  );
}
export default App;
