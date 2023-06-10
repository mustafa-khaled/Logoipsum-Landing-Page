import { Route, Routes } from "react-router-dom";
import { Header, About, Footer } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
