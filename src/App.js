import { Route, Routes } from "react-router-dom";
import { Header, About, Footer, Services, Portfolio } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="Logoipsum-Landing-Page" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
