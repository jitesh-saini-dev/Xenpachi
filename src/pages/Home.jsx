import { useNavigate } from "react-router-dom";
import About from "./About";
import News from "./News";
import Shop from "./Shop";

const products = [
  {
    id: 1,
    name: "Joy Tee",
    price: 1499,
    src: "https://www.xenpachi.com/wp-content/uploads/2023/08/joy_listin.jpg",
    offset: "translate-y-16",
  },
  {
    id: 2,
    name: "Daddy's Here",
    price: 1999,
    src: "https://www.xenpachi.com/wp-content/uploads/2024/03/daddy_here_listing-compressed.webp",
    offset: "-translate-y-8",
  },
  {
    id: 3,
    name: "Invincible",
    price: 1799,
    src: "https://www.xenpachi.com/wp-content/uploads/2024/07/invincible_listingb.jpg",
    offset: "translate-y-16",
  },
  {
    id: 4,
    name: "Eclipse",
    price: 2199,
    src: "https://www.xenpachi.com/wp-content/uploads/2024/08/eclipse_listinge-600x800.jpg",
    offset: "-translate-y-8",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    // Main container jo poori website ko wrap karega
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION (Tera Main Animated Page) */}
      {/* min-h-[90vh] ki jagah min-h-screen kar diya taaki ekdum full screen cover kare */}
      <div className="relative min-h-screen bg-white text-black overflow-hidden flex flex-col items-center">
        <style>
          {`
            @keyframes fadeUpSlowmo {
              0% { opacity: 0; transform: translateY(100px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up {
              opacity: 0;
              animation: fadeUpSlowmo 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            }
          `}
        </style>

        {/* Massive Background Title - ANIMATED */}
        <div className="w-full text-center mt-10 z-0 absolute top-0 mt-20">
          <h1
            className="text-[10vw] font-black tracking-tight leading-none animate-fade-up"
            style={{ animationDelay: "0s" }}
          >
            Xenpachi Aesthetics
          </h1>
        </div>

        {/* Zigzag Image Gallery - ANIMATED */}
        <div className="relative z-10 flex justify-center items-center gap-4 lg:gap-8 mt-[15vw] px-10 w-full max-w-7xl">
          {products.map((item, index) => (
            <div
              key={item.id}
              className={`relative group w-1/4 max-w-[260px] aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-gray-200 shadow-xl animate-fade-up ${item.offset}`}
              style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* FLOATING TEXT ELEMENTS - STATIC */}
        <div className="absolute left-12 top-[45%] max-w-[200px] font-serif space-y-6 z-20">
          <div>
            <h4 className="font-bold text-lg mb-2">Product Detail</h4>
            <p className="text-sm text-black leading-snug">
              Xenpachi Online. Shop for
              <br />
              Xenpachi in India ✯ Buy
              <br />
              latest range of Xenpachi.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Material</h4>
            <p className="text-sm text-black">100% cotton</p>
          </div>
        </div>

        {/* New Collection - STATIC */}
        <div className="absolute left-12 bottom-10 z-20 font-serif">
          <h3 className="text-xl font-bold italic">New Collection</h3>
        </div>

        {/* Shop page redirect button - STATIC */}
        <div className="absolute right-12 bottom-10 z-20 font-serif">
          <button
            onClick={() => navigate("/shop")}
            className="text-xl font-bold hover:translate-x-2 transition-transform flex items-center gap-2 cursor-pointer"
          >
            Shop the look <span>&rarr;</span>
          </button>
        </div>
      </div>

      <Shop />

      {/* 2. ABOUT SECTION (Scroll karne pe aayega) */}
      <About />

      {/* 3. NEWS SECTION (Uske neeche aayega) */}
      <News />
    </div>
  );
};

export default Home;
