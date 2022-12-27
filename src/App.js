import "./App.css";
import Header from "./pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Products/ProductDetails";
import ShoppingCart from "./pages/Cart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/shopping-cart"
          element={<ShoppingCart></ShoppingCart>}
        ></Route>
        <Route
          path="/product/details"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
