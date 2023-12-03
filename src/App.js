import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header";
import { NavMenu } from "./components/NavMenu";

import { Home } from "./pages/a-main/Home";
import { Torus } from "./pages/a-main/Torus";
import { Space } from "./pages/a-main/Space";
import { Time } from "./pages/a-main/Time";
import { Scroll } from "./pages/a-main/Scroll";
import { Mach } from "./pages/a-main/Mach";
import { StarPunk } from "./pages/a-main/StarPunk";
import { Portal } from "./pages/portal/Portal";
import { Dragon } from "./pages/dragon/Dragon";
import { Dissolve } from "./pages/dissolve/Dissolve";
import { VR } from "./pages/vr/VR";
import { Testing } from "./a1-testing/Testing";
import { AniMoto } from "./pages/moto-game/AniMoto";
import { LetterGame } from "./pages/letter-game/LetterGame";
import "./App.css";
import "./components/footer-links.css";

import { SandyBday } from "./pages/bday-cards/SandyBday";
import { DadBday } from "./pages/bday-cards/DadBday";

import { FpsMeter } from "./components/FpsMeter";
import { BtnFullScreen } from "./components/BtnFullScreen.js";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [fpsOpen, setFpsOpen] = useState(false);

  return (
    <div className="App">
      <Header navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />

      <NavMenu
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
        fpsOpen={fpsOpen}
        setFpsOpen={setFpsOpen}
      />

      <BtnFullScreen />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/torus" element={<Torus />} />
        <Route path="/space" element={<Space />} />
        <Route path="/time" element={<Time />} />
        <Route path="/scroll" element={<Scroll />} />
        {/* <Route path="/shoe" element={<Shoe />} /> */}
        <Route path="/mach" element={<Mach />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/star-punk" element={<StarPunk />} />
        <Route path="/dissolve" element={<Dissolve />} />
        <Route path="/vr" element={<VR />} />
        {/* <Route path="/vr2" element={<VR2 />} /> */}
        <Route path="/testing" element={<Testing />} />
        <Route path="/animoto" element={<AniMoto />} />
        <Route path="/letter-game" element={<LetterGame />} />
        <Route path="/happy-bday-sandy" element={<SandyBday />} />
        <Route path="/happy-bday-dad" element={<DadBday />} />
      </Routes>

      <FpsMeter fpsOpen={fpsOpen} setFpsOpen={setFpsOpen} />
    </div>
  );
}

export default App;
