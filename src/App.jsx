import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Gray from "./pages/Gray.jsx";
import Rgb from "./pages/Rgb.jsx";
import Biner from "./pages/Biner.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="rgb" element={<Rgb />} />
        <Route path="gray" element={<Gray />} />
        <Route path="biner" element={<Biner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
