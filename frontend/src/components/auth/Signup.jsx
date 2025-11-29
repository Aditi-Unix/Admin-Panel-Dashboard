import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      setError(true);
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      setMessage(res.data.msg);
      setError(!res.data.success);

      if (res.data.success) {
        setTimeout(() => {
          window.location.href = "/login";
        }, 1200);
      }
    } catch (err) {
      setMessage("Signup failed! Server error");
      setError(true);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg"
      >
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-2">
          Create Account ✨
        </h2>

        {message && (
          <p
            className={`text-center mb-4 font-semibold text-lg ${
              error ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        <label className="text-gray-700 font-medium">Full Name</label>
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-4 border">
          <FiUser className="text-gray-500" />
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent outline-none ml-3"
          />
        </div>

        <label className="text-gray-700 font-medium">Email</label>
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-4 border">
          <FiMail className="text-gray-500" />
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent outline-none ml-3"
          />
        </div>

        <label className="text-gray-700 font-medium">Password</label>
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 mb-6 border">
          <FiLock className="text-gray-500" />
          <input
            type="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent outline-none ml-3"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-lg 
                transition-all hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </motion.button>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-bold hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;
