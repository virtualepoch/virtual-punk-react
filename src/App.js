import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { NavMenu } from "./components/NavMenu";

import { Home } from "./pages/Home";
import { Torus } from "./pages/Torus";
import { Space } from "./pages/Space";
import { Time } from "./pages/Time";
import { Shoe } from "./pages/Shoe";
import { Scroll } from "./pages/Scroll";
import { Mach } from "./pages/Mach.js";
import { StarPunk } from "./pages/StarPunk";
import { VR } from "./pages/VR.js";
import { Testing } from "./pages/Testing.js";
import { Testing2 } from "./pages/Testing2.js";

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
        <Route path="/space" element={<Space />} />
        <Route path="/time" element={<Time />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/shoe" element={<Shoe />} />
        <Route path="/mach" element={<Mach />} />
        <Route path="/star-punk" element={<StarPunk />} />
        <Route path="/vr" element={<VR />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/testing-2" element={<Testing2 />} />
      </Routes>
    </div>
  );
}

export default App;
