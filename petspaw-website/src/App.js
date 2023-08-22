import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Voting from "./components/Voting";
import Breeds from "./components/Breeds";
import Gallery from "./components/Gallery";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";

import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="home-container">
          <NavBar />
          <Routes>
            <Route path="/voting" element={<Voting />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
