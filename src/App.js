import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { NavMenu } from "./components/NavMenu";

import { Home } from "./pages/Home";
import { Torus } from "./pages/Torus";
import { VR } from "./pages/VR.js";
import { Space } from "./pages/Space";
import { ShoeColors } from "./pages/ShoeColors";
import { ScrollAnim } from "./pages/ScrollAnim";
import { Time } from "./pages/Time";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/torus" element={<Torus />} />
        <Route path="/vr" element={<VR />} />
        <Route path="/space" element={<Space />} />
        <Route path="/shoe" element={<ShoeColors />} />
        <Route path="/scroll-anim" element={<ScrollAnim />} />
        <Route path="/time" element={<Time />} />
        <Route path="/star-punk" element={<StarPunk />} />
      </Routes>
    </div>
  );
}

export default App;
