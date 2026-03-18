import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import API from "./api";


const CreatingPage = () => {
  const [category, setCategory] = useState("");

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
    businessCategory: category,
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
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
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
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#E26338]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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

            {category === "Other" && (
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