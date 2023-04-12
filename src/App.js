import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { ButtonToTop } from "./components/ButtonToTop";
import { HomePage } from "./pages/HomePage";
import { PyramidPage } from "./pages/PyramidPage";
import { ScrollAnimPage } from "./pages/ScrollAnimPage";
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
      <ButtonToTop />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/three-fiber-pyramid" element={<PyramidPage />} />
          <Route path="/three-fiber-scroll-anim" element={<ScrollAnimPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
