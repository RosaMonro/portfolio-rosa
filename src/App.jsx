import { Route, Routes } from "react-router-dom";
import Styleguide from "./styleguide/Styleguide";

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
