import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:productId" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
