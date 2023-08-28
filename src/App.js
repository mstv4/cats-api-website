import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/main/Home";
import Voting from "./components/main/Voting";
import Breeds from "./components/main/Breeds";
import Gallery from "./components/main/Gallery";
import NotFound from "./components/main/NotFound";
import NavBar from "./components/main/NavBar";

import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="home-container">
          <NavBar />
          <div className="main-container">
            <Routes>
              <Route path="/voting" element={<Voting />} />
              <Route path="/breeds" element={<Breeds />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
