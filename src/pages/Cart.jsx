import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-6 sm:px-12 font-serif flex flex-col items-center">
      {/* HEADER SECTION */}
      <div className="w-full max-w-5xl mb-10">
        <button
          onClick={() => navigate("/shop")}
          className="mb-8 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-500 hover:text-black hover:-translate-x-2 transition-all cursor-pointer"
        >
          &larr; Back to Collection
        </button>
        <h1 className="text-6xl font-black italic uppercase tracking-widest text-black">
          The Vault
        </h1>
        <p className="text-gray-500 mt-2 text-lg italic">
          Your selected aesthetics.
        </p>
      </div>

      {cart.length === 0 ? (
        /* PREMIUM EMPTY STATE */
        <div className="flex flex-col items-center justify-center py-20 w-full max-w-5xl bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-3xl text-gray-400 italic font-light mb-8">
            The vault is currently empty.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-black text-white px-10 py-4 font-black uppercase tracking-widest hover:bg-gray-800 hover:scale-105 transition-all shadow-xl cursor-pointer"
          >
            Explore Drops
          </button>
        </div>
      ) : (
        /* CART ITEMS & SUMMARY LAYOUT */
        <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-10">
          {/* LEFT: Items List */}
          <div className="flex-1 space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row bg-white p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 gap-6 relative"
              >
                {/* Aesthetic Image */}
                <div className="w-full sm:w-36 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Product Details & Controls */}
                <div className="flex-grow flex flex-col justify-between py-2">
                  {/* Title & Remove Button */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-black tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 font-bold text-lg mt-1">
                        ₹{item.price} each
                      </p>
                    </div>
                    {/* Minimalist Remove Icon */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500 text-2xl font-black transition-colors cursor-pointer p-2"
                      title="Remove Item"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Quantity & Item Subtotal */}
                  <div className="flex flex-wrap items-end justify-between gap-4 mt-6 sm:mt-0">
                    {/* Pill Shaped Quantity Control */}
                    <div className="flex items-center border-2 border-black rounded-full overflow-hidden bg-white">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-10 h-10 flex items-center justify-center text-2xl font-light hover:bg-black hover:text-white transition-colors cursor-pointer pb-1"
                      >
                        -
                      </button>
                      <span className="w-12 text-center text-lg font-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-10 h-10 flex items-center justify-center text-2xl font-light hover:bg-black hover:text-white transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total Price */}
                    <p className="text-3xl font-black text-black">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Checkout Summary Box */}
          <div className="w-full lg:w-96 lg:sticky lg:top-10 h-fit">
            <div className="bg-black text-white p-8 rounded-3xl shadow-2xl flex flex-col gap-6">
              <h2 className="text-2xl font-black uppercase tracking-widest border-b border-gray-800 pb-4">
                Summary
              </h2>

              <div className="space-y-3 text-lg font-light text-gray-300">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-white">
                    Calculated at next step
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-gray-800 pt-6 mt-2">
                <span className="text-xl font-bold uppercase tracking-widest">
                  Total
                </span>
                <span className="text-4xl font-black text-white">₹{total}</span>
              </div>

              <button
                className="w-full bg-white text-black py-5 mt-4 text-xl font-black uppercase tracking-widest hover:bg-gray-200 hover:scale-[1.02] transition-all cursor-pointer rounded-xl"
                onClick={() =>
                  alert(
                    "🎉 Order placed successfully!\nWe will contact you shortly for confirmation (COD).",
                  )
                }
              ></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
