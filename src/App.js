import { Route, Routes } from "react-router-dom";
import { useState } from "react";

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
import { AniMoto } from "./pages/moto-game/AniMoto.js";
import { LetterGame } from "./pages/letter-game/LetterGame.js";

import "./App.css";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
      <NavMenu navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
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
        <Route path="/animoto" element={<AniMoto />} />
        <Route path="/letter-game" element={<LetterGame />} />
      </Routes>
    </div>
  );
}

export default App;
