import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { SpacePage } from "./pages/SpacePage";
import { ScrollAnimPage } from "./pages/ScrollAnimPage";
import { TorusPage } from "./pages/TorusPage";
import "./pages/_pages.css";
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
          <Route path="/three-fiber-pyramid" element={<SpacePage />} />
          <Route path="/three-fiber-scroll-anim" element={<ScrollAnimPage />} />
          <Route path="/three-fiber-torus-anim" element={<TorusPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
