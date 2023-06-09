import { Route, Routes } from "react-router-dom";
import {
  Header,
  About,
  Footer,
  Services,
  Portfolio,
  Testimonials,
  Contact,
} from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="Logoipsum-Landing-Page" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
