import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import API from "../api/api";

const CreatingPage = () => {
  const [form, setForm] = useState({
    businessName: "",
    ownerName: "",
    phone: "",
    username: "",
    password: "",
    businessCategory: "",
  });

  const registerMutation = useMutation({
    mutationFn: (data) => API.post("/auth/register", data),

    onSuccess: () => {
      alert("Account created");
    },
    onError: (err) => {
      console.log(err);
      alert("Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    registerMutation.mutate({
      ...form,
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Create Your Business
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          Start managing your orders in minutes
        </p>

        <form className="mt-6 space-y-5">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Sweet Bites Bakery"
              value={form.businessName}
              onChange={(e) =>
                setForm({ ...form, businessName: e.target.value })
              }
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Owner Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              value={form.ownerName}
              onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="sweetbites"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
            />
          </div>

          {/* Password */}
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

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Category
            </label>

            <select
              value={form.businessCategory}
              onChange={(e) =>
                setForm({ ...form, businessCategory: e.target.value })
              }
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
            >
              <option value="">Select Category</option>
              <option value="Bakery">Bakery</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Food">Food</option>
              <option value="Services">Services</option>
              <option value="Other">Other</option>
            </select>

            {form.businessCategory === "Other" && (
              <input
                type="text"
                placeholder="Please specify"
                className="mt-3 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
              />
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#E26338] hover:bg-[#CF542C] text-white py-2.5 rounded-lg font-semibold transition"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatingPage;
