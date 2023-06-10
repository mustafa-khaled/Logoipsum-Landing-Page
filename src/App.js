import { Route, Routes } from "react-router-dom";
import { Header, About, Footer, Services } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Logoipsum-Landing-Page" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
