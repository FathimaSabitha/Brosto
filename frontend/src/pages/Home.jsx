import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-[#E26338]">Quickart</h1>

        <button
          onClick={() => navigate("/login")}
          className="text-sm font-medium text-gray-700 hover:text-[#E26338]"
        >
          Login
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
          Manage Orders Easily.
          <span className="text-[#E26338]"> Grow Your Business Faster.</span>
        </h2>

        <p className="mt-6 text-gray-600 max-w-xl">
          A simple platform for small businesses to manage products, track orders.
        </p>

        <div className="mt-10 flex gap-4">
          <button
            onClick={() => navigate("/create")}
            className="bg-[#E26338] text-white px-8 py-3 rounded-lg"
          >
            Get Started
          </button>

          <button className="border px-8 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Quickart
      </footer>
    </div>
  );
};

export default Home;