import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notfound";
import PracticePage from "./pages/practice";
import ProductsPage from "./pages/prodcuts";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
