import { useState } from "react";
import CreatingPage from "./CreatingPage";

export default function App() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <>
      {showCreate ? (
        <CreatingPage />
      ) : (
        <div className="bg-[#AABECD] min-h-screen p-4">
          <h1 className="text-[#2A4D88] flex justify-center mt-6 text-3xl font-bold">
            BROSTO
          </h1>

          <div className="flex justify-end">
            <div className="bg-[#D9D9D8] text-[#2A4D88] px-4 py-2 rounded-md">
              Login
            </div>
          </div>

          <div className="flex justify-center mb-20">
            <div className="bg-[#D9D9D8] text-[#2A4D88] px-6 py-3 rounded-md">
              <button onClick={() => setShowCreate(true)}>Join Us</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
