import { useState } from "react";

const News = () => {
  // Form handling ke liye simple state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      // Asli project mein yahan api/slice call karke backend me email bhejte hain
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden font-serif">
      {/* Background Aesthetic Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 z-0"></div>

      <div className="relative z-10 max-w-3xl w-full text-center space-y-10">
        {/* Top Tagline / Alert */}
        <div className="inline-block border border-red-600 bg-red-600/10 text-red-500 px-6 py-2 rounded-full text-sm tracking-widest uppercase font-bold animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.5)]">
          [ Classified Drop ]
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
          Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
            Drops
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl leading-relaxed text-gray-400 max-w-2xl mx-auto font-light">
          The{" "}
          <span className="text-white font-bold italic">Winter Collection</span>{" "}
          is loading. Get exclusive early access before the masses. Keep your
          eyes peeled.
        </p>

        {/* Newsletter Subscription Form */}
        {!subscribed ? (
          <form
            onSubmit={handleSubscribe}
            className="mt-12 flex flex-col sm:flex-row gap-0 max-w-lg mx-auto w-full border-2 border-zinc-800 focus-within:border-white transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-transparent text-white px-6 py-4 outline-none text-lg placeholder:text-zinc-700"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-gray-300 transition-colors cursor-pointer whitespace-nowrap"
            >
              Join Cult
            </button>
          </form>
        ) : (
          <div className="mt-12 border-2 border-green-500 bg-green-500/10 text-green-400 p-6 font-bold text-xl tracking-widest uppercase">
            Welcome to the movement. Check your inbox.
          </div>
        )}
      </div>

      {/* Bottom Ticker Text */}
      <div className="absolute bottom-10 text-zinc-900 font-black text-3xl md:text-5xl uppercase tracking-widest whitespace-nowrap overflow-hidden w-full text-center select-none z-0">
        Stay Invincible // Break the Matrix // Xenpachi
      </div>
    </div>
  );
};

export default News;
