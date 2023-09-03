import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header";
import { NavMenu } from "./components/NavMenu";

import { Home } from "./pages/Home";
import { Torus } from "./pages/Torus";
import { Space } from "./pages/Space";
import { Time } from "./pages/Time";
// import { Shoe } from "./pages/Shoe";
import { Scroll } from "./pages/Scroll";
import { Mach } from "./pages/Mach";
import { StarPunk } from "./pages/StarPunk";
import { Portal } from "./pages/portal/Portal";
import { Dragon } from "./pages/dragon/Dragon";
import { Dissolve } from "./pages/dissolve/Dissolve";
import { VR } from "./pages/vr/VR";
import { VR2 } from "./pages/vr/VR2";
import { Testing } from "./pages/Testing";
import { AniMoto } from "./pages/moto-game/AniMoto";
import { LetterGame } from "./pages/letter-game/LetterGame";
import { Flow } from "./pages/Flow";

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
        {/* <Route path="/shoe" element={<Shoe />} /> */}
        <Route path="/mach" element={<Mach />} />
        <Route path="/star-punk" element={<StarPunk />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/dissolve" element={<Dissolve />} />
        <Route path="/vr" element={<VR />} />
        {/* <Route path="/vr2" element={<VR2 />} /> */}
        <Route path="/testing" element={<Testing />} />
        <Route path="/animoto" element={<AniMoto />} />
        <Route path="/letter-game" element={<LetterGame />} />
        <Route path="/flow" element={<Flow />} />
      </Routes>
    </div>
  );
}

export default App;
