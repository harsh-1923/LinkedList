import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";

import HomePage from "./Pages/HomePage/HomePage.jsx";
import LinksPage from "./Pages/LinksPage/LinksPage.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/links" element={<LinksPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
