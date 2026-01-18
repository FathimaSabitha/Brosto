import { useEffect } from "react";
// import "./index.css";

function App() {
  useEffect(() => {
    document.title = "Brosto";
  }, []);

  return (
    <h1 className="bg-red-300 text-red-900 p-4 text-3xl font-bold">
      Brosto
    </h1>
  );
}

export default App;
