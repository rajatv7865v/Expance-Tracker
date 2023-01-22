import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expanse from "./components/Expanse";
import Income from "./components/Income";
import Chartjs from "./components/Chartjs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expanse" element={<Expanse />} />
        <Route path="/income" element={<Income />} />
        <Route path="/chart" element={<Chartjs/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
