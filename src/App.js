import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main";
import ProductPage from "./product";
import UploadPage from "./upload";
import TimerComponent from "./timer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPageComponent />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  );
}

export default App;
