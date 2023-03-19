import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MainOverlay } from "./components/MainOverlay";
import { Header } from "./components/Header";
import { ButtonToTop } from "./components/ButtonToTop";
import { ThreeFiberCanvas } from "./components/ThreeFiberCanvas";
import { Home } from "./pages/Home";
import { ThreeJsTesting } from "./pages/ThreeJsTesting";
import { ThreeFiberTesting } from "./pages/ThreeFiberTesting";
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
      <MainOverlay />
      <Header />
      <ButtonToTop />
      <ThreeFiberCanvas />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/three-js-testing" element={<ThreeJsTesting />} />
          <Route path="/three-fiber-testing" element={<ThreeFiberTesting />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
