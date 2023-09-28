import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryProducts from "./app/pages/Products/CategoryProducts";
import Contact from "./app/pages/Contact";
import Home from "./app/pages/HomePage/Home";
import PageNotFound from "./app/pages/PageNotFound";
import SingleProductDetails from "./app/pages/Products/ProductDetails/SingleProductDetails";
import Cart from "./app/pages/Cart";

function App() {
  
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<CategoryProducts />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:productId" element={<SingleProductDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;