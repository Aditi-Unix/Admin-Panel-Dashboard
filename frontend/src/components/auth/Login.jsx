import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Please fill all fields");
      setError(true);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      setMessage(res.data.msg);
      setError(!res.data.success);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 800);
      }
    } catch {
      setMessage("Server error!");
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg"
      >
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-4">
          Welcome Back 👋
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
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent outline-none ml-3"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-indigo-700"
        >
          Login
        </motion.button>

        <p className="text-center mt-5 text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 font-bold hover:underline">
            Signup
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default Login;
