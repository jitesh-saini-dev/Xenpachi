import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-serif border-t-4 border-zinc-900">
      <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-4xl font-black italic tracking-widest uppercase">
            Xenpachi
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Not just a brand; it's a movement. Born in the streets, crafted for
            the aesthetic. Stay invincible.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-bold uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2 inline-block w-fit">
            Explore
          </h3>
          <Link
            to="/"
            className="text-gray-400 hover:text-white hover:translate-x-2 transition-all w-fit"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-400 hover:text-white hover:translate-x-2 transition-all w-fit"
          >
            The Shop
          </Link>
          <Link
            to="/cart"
            className="text-gray-400 hover:text-white hover:translate-x-2 transition-all w-fit"
          >
            Your Vault
          </Link>
        </div>

        {/* Socials / Connect */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-bold uppercase tracking-widest mb-4 border-b border-zinc-800 pb-2 inline-block w-fit">
            Connect
          </h3>
          <a
            href="#"
            className="text-gray-400 hover:text-white hover:translate-x-2 transition-all w-fit"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white hover:translate-x-2 transition-all w-fit"
          >
            Twitter // X
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white hover:translate-x-2 transition-all w-fit"
          >
            Discord
          </a>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-zinc-900 text-center py-6 text-gray-500 text-xs tracking-widest uppercase bg-zinc-950">
        &copy; 2026 Xenpachi Aesthetics. Break the Matrix. By: Jitesh Saini
      </div>
    </footer>
  );
};

export default Footer;
