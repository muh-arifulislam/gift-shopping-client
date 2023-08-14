import "./App.css";
import Header from "./pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Products/ProductDetails";
import ShoppingCart from "./pages/Cart/ShoppingCart";
import AllProducts from "./pages/AllProducts/AllProducts";
import Footer from "./pages/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<AllProducts></AllProducts>}></Route>
        <Route
          path="/shopping-cart"
          element={<ShoppingCart></ShoppingCart>}
        ></Route>
        <Route
          path="/products/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
