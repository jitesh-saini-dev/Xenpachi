import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handlechange(e) {
    e.preventDefault();
    const result = JSON.parse(localStorage.getItem("user"));
    console.log(result);

    if (!result) {
      alert("You Have to SignUp First!");
      navigate("/signup");
      return;
    }

    if (form.email !== result.email && form.password !== result.password) {
      alert("Email & Password not matched!");
    } else if (form.email !== result.email) {
      alert("Email not matched!");
    } else if (form.password !== result.password) {
      alert("Password not matched!");
    } else {
      // Login Success
      alert("Login Successfully 🔥");
      localStorage.setItem("token", true);

      // Login hote hi Home page par bhej diya
      navigate("/");
    }

    setForm({
      email: "",
      password: "",
    });
  }

  // Common input styles
  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-300 outline-none transition-all focus:border-black focus:ring-2 focus:ring-gray-200";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-serif relative">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black italic tracking-tighter mb-2">
            XENPACHI
          </h2>
          <h3 className="text-gray-500 font-bold text-lg">Welcome Back</h3>
        </div>

        {/* Sirf Login Form */}
        <form onSubmit={handlechange} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className={inputClass}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter your Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold text-lg py-3 rounded-lg mt-2 hover:bg-gray-800 hover:shadow-lg transition-all active:scale-95"
          >
            Log In
          </button>

          <p className="text-center text-gray-500 font-semibold mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
