import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { NavMenu } from "./components/NavMenu";

import { HomePage } from "./pages/HomePage";
import { VR } from "./pages/VR.js";
import { SpacePage } from "./pages/SpacePage";
import { ShoePage } from "./pages/ShoePage";
import { ScrollAnimPage } from "./pages/ScrollAnimPage";
import { TorusPage } from "./pages/TorusPage";
import { GearsOfTime } from "./pages/GearsOfTime";
import { StarPunk } from "./pages/StarPunk";

import "./App.css";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
const [navMenuOpen, setNavMenuOpen] = useState(false);

  useScrollToTop();
  return (
    <div className="App">
      <Header setNavMenuOpen={setNavMenuOpen} navMenuOpen={navMenuOpen} />
      <NavMenu setNavMenuOpen={setNavMenuOpen} navMenuOpen={navMenuOpen} />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vr" element={<VR />} />
          <Route path="/space" element={<SpacePage />} />
          <Route path="/shoe" element={<ShoePage />} />
          <Route path="/scroll-anim" element={<ScrollAnimPage />} />
          <Route path="/torus" element={<TorusPage />} />
          <Route path="/gears-of-time" element={<GearsOfTime />} />
          <Route path="/star-punk" element={<StarPunk />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
