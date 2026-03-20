// import { useState } from "react";
// import CreatingPage from "./pages/CreatingPage";
// import Login from "./pages/Login";

// export default function App() {
//   const [page, setPage] = useState("");

//   if (page === "create") return <CreatingPage />;
//   if (page === "login") return <Login />;

//   return (
//     <>
//       <div className="min-h-screen bg-white flex flex-col">
//         <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
//           <h1 className="text-2xl font-bold text-[#E26338]">Quickart</h1>

//           <button
//             onClick={() => setPage("login")}
//             className="text-sm font-medium text-gray-700 hover:text-[#E26338] transition"
//           >
//             Login
//           </button>
//         </header>

//         <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-tight">
//             Manage Orders Easily.
//             <span className="text-[#E26338]"> Grow Your Business Faster.</span>
//           </h2>

//           <p className="mt-6 text-gray-600 max-w-xl">
//             A simple platform for small businesses to manage products, track
//             orders, and serve customers without confusion.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={() => setPage("create")}
//               className="bg-[#E26338] hover:bg-[#CF542C] text-white px-8 py-3 rounded-lg font-semibold shadow-sm transition"
//             >
//               Get Started
//             </button>

//             <button className="border border-gray-300 px-8 py-3 rounded-lg font-semibold text-gray-700 hover:border-[#E26338] hover:text-[#E26338] transition">
//               Learn More
//             </button>
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="text-center text-sm text-gray-500 py-6">
//           © {new Date().getFullYear()} Quickart All rights reserved.
//         </footer>
//       </div>
//     </>
//   );
// }

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
