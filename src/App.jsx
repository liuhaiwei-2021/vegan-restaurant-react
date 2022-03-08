//NPM files
import { Routes, Route } from "react-router-dom";

//Projects files
import Footer from "./components/Footer";
import Navgation from "./components/Navgation";
import Home from "./pages/Home";
import Deserts from "./pages/Deserts";
import Dishes from "./pages/Dishes";
import Drinks from "./pages/Drinks";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="main">
      <Navgation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/deserts" element={<Deserts />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
