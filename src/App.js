import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
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
  useScrollToTop();
  return (
    <div className="App">
      <Header />
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
