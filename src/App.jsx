//NPM files
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

// Add the export default here -1
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navigation />
        <div className="content">
          <Routes>
            {/* The exact tag goes on the directory with only "/"" to avoid bugs */}
            <Route path="/" element={<Home />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/deserts" element={<Deserts />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/:category/:id" element={<ProductDetails />} exact />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
