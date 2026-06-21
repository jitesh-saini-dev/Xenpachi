import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center p-8 lg:p-24 font-serif">
      {/* Background Decorative Watermark Text */}
      <h1 className="absolute top-4 left-4 text-[15vw] font-black text-zinc-900 opacity-40 select-none z-0 tracking-tighter leading-none">
        XENPACHI
      </h1>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-10 md:mt-0">
        {/* Left Side: Text Content */}
        <div className="space-y-8 z-20">
          <div className="inline-block border-b-4 border-white pb-2">
            <h1 className="text-6xl lg:text-7xl font-black italic uppercase tracking-widest text-white">
              Our Story
            </h1>
          </div>

          <p className="text-2xl leading-relaxed text-gray-300 font-light">
            Xenpachi is not just a brand; it's a{" "}
            <span className="text-white font-bold italic">movement</span>. Born
            in the streets, crafted for the aesthetic.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed border-l-4 border-gray-600 pl-4">
            We blend premium 100% cotton with designs that speak louder than
            words. Every thread, every drop is meant to break the matrix.
          </p>

          <div className="pt-6">
            <button
              onClick={() => navigate("/shop")}
              className="bg-white text-black px-8 py-4 font-bold text-lg uppercase tracking-widest hover:bg-gray-300 hover:scale-105 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none"
            >
              Stay Invincible &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Aesthetic Image with Hover Effect */}
        <div className="relative aspect-[3/4] max-w-md mx-auto w-full border border-zinc-800 rounded-lg overflow-hidden shadow-2xl group z-20">
          {/* Maine randomly teri hi ek image use kar li hai reference k liye */}
          <img
            src="https://www.xenpachi.in/wp-content/uploads/2025/10/chainsaw_venom_hood_listingg-600x800.jpg"
            alt="Xenpachi Movement"
            className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
          />
          {/* Ek subtle overlay border andar ki taraf */}
          <div className="absolute inset-0 border-8 border-black/30 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
