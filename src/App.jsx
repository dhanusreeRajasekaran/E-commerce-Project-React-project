

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          <Route
            path="*"
            element={
              <main className="p-16 text-center">
                <h1 className="text-3xl font-bold">
                  404 - Page Not Found
                </h1>
                <Link
                  to="/"
                  className="mt-4 inline-block text-pink-600"
                >
                  Back to Home
                </Link>
              </main>
            }
          />

        </Routes>

        <footer className="mt-12 bg-gray-900 px-5 py-7 text-center text-gray-300">
          © {new Date().getFullYear()} Trendora. All rights reserved.
        </footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
