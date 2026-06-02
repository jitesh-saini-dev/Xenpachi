import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  function handlechange(e) {
    e.preventDefault();
    const errorobj = {};

    if (form.name === "") errorobj.name = "Name is required";
    if (form.email === "") errorobj.email = "Email is required";
    if (form.password === "") errorobj.password = "Password is required";
    if (form.age === "") errorobj.age = "Age is required";
    if (form.phone === "") errorobj.phone = "Phone no. is required";
    if (form.city === "") errorobj.city = "City is required";
    if (form.state === "") errorobj.state = "State is required";
    if (form.country === "") errorobj.country = "Country is required";

    setError(errorobj);

    if (Object.keys(errorobj).length === 0) {
      console.log(">>>>>formdata", form);
      localStorage.setItem("user", JSON.stringify(form));

      setForm({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
        city: "",
        state: "",
        country: "",
      });
      
      // Tum chaho toh form submit hone ke baad user ko login ya home pe bhej sakte ho
      // navigate("/login");
    }
  }

  // Common input class taaki code baar-baar na likhna pade
  const inputClass = (fieldName) =>
    `w-full px-4 py-3 rounded-lg border outline-none transition-all ${
      error[fieldName]
        ? "border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-serif">
      <div className="max-w-xl w-full bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black italic tracking-tighter mb-2">
            XENPACHI
          </h2>
          <h3 className="text-gray-500 font-bold text-lg">
            Create your account
          </h3>
        </div>

        <form onSubmit={handlechange} className="space-y-5">
          {/* 1st Row: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass("name")}
              />
              {error.name && <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">{error.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass("email")}
              />
              {error.email && <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">{error.email}</p>}
            </div>
          </div>

          {/* 2nd Row: Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={inputClass("password")}
            />
            {error.password && <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">{error.password}</p>}
          </div>

          {/* 3rd Row: Age & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="number"
                placeholder="Age"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className={inputClass("age")}
              />
              {error.age && <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">{error.age}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Phone No."
                maxLength={10}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass("phone")}
              />
              {error.phone && <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">{error.phone}</p>}
            </div>
          </div>

          {/* 4th Row: City & State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                placeholder="City"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className={inputClass("city")}
              />
              {error.city && <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">{error.city}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="State"
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                className={inputClass("state")}
              />
              {error.state && <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">{error.state}</p>}
            </div>
          </div>

          {/* 5th Row: Country */}
          <div>
            <input
              type="text"
              placeholder="Country"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
              className={inputClass("country")}
            />
            {error.country && <p className="text-red-500 text-sm mt-1 ml-1 font-semibold">{error.country}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-bold text-lg py-3 rounded-lg mt-4 hover:bg-gray-800 hover:shadow-lg transition-all active:scale-95"
          >
            Create Account
          </button>
          
          {/* Extra login link just for good UX */}
          <p className="text-center text-gray-500 font-semibold mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-black hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;