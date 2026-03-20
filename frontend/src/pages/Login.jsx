import { useState } from "react";
import CreatingPage from "./CreatingPage";
import API from "../api/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [page, setPage] = useState("login");
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigate= useNavigate()

  const loginMutation = useMutation({
    mutationFn: (data) => API.post("/auth/login", data),
    onSuccess: (res) => {
      const token = res.data.token;
      //store token
      localStorage.setItem("token", token);
      navigate("/dashboard"); 
    },
    onError: (err) => {
      console.log(err);
      alert("Invalid credentials");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    loginMutation.mutate(form);
  };

  if (page === "create") return <CreatingPage />;
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-[#E26338] text-center">
          Quickart
        </h1>

        <h2 className="text-xl font-semibold text-gray-900 text-center mt-4">
          Welcome Back
        </h2>

        <p className="text-sm text-gray-500 text-center mt-1">
          Login to manage your business
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              placeholder="sweetbites"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-gray-500 hover:text-[#E26338]"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-[#E26338] hover:bg-[#CF542C] text-white py-2.5 rounded-lg font-semibold transition"
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <button
            onClick={() => setPage("create")}
            className="text-[#E26338] font-medium hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
