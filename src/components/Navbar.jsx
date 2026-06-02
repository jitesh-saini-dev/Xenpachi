import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center py-6 px-12 bg-white text-black font-serif border-b border-gray-100 z-50 relative">
      <div className="flex gap-8 font-bold text-lg">
        <Link to="/" className="hover:text-gray-500 transition">
          Home
        </Link>
        <Link to="/shop" className="hover:text-gray-500 transition">
          Shop
        </Link>
      </div>

      <Link to="/">
        <h3 className="text-3xl font-black italic tracking-tighter">
          XENPACHI
        </h3>
      </Link>

      <div className="flex gap-8 font-bold text-lg">
        <Link to="/about" className="hover:text-gray-500 transition">
          About
        </Link>
        <Link to="/news" className="hover:text-gray-500 transition">
          News
        </Link>
        <Link
          to="/cart"
          className="hover:text-gray-500 transition text-red-600"
        >
          Cart {cart.length > 0 && `(${cart.length})`}
        </Link>
        {/* Naye Login aur Signup Links */}
        <Link
          to="/login"
          className="hover:text-gray-500 transition border-l border-gray-300 pl-8"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-black text-white px-5 py-2 text-base rounded-md hover:bg-gray-800 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
