//NPM files
import { Routes, Route } from "react-router-dom";

//Projects files
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Deserts from "./pages/Deserts";
import Dishes from "./pages/Dishes";
import Drinks from "./pages/Drinks";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import "./styles/App.css";

function App() {
  return (
    <div className="main">
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/deserts" element={<Deserts />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/:id" Component={ProductDetails} exact />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
