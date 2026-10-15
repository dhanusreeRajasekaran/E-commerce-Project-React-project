

import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-bold"
      : "hover:text-pink-600";

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5">
        <Link to="/" className="text-3xl font-extrabold">
          Trendora<span className="text-pink-600">.</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/shop" className={linkStyle}>
            Shop
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/cart" className={linkStyle}>
            Cart ({cartCount})
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
