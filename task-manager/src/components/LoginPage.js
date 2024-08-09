import React, { useState } from "react";
import { loginUser } from "../services/api";
import { setToken } from "../services/auth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ username, password });
      setToken(data.token);
      alert("Login Successful");
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-sm mx-auto p-4 border rounded-md shadow-md"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:border-blue-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="w-full bg-blue-300 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
