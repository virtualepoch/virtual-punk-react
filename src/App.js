import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import { ThreeCanvas } from "./components/ThreeCanvas";
import { ThreeFiberCanvas } from "./components/ThreeFiberCanvas";
import { Header } from "./components/Header";
import { ButtonToTop } from "./components/ButtonToTop";
import "./components/button-to-top.css";
import { Home } from "./pages/Home";
import "./pages/home.css";
import { ThreeJsTesting } from "./pages/ThreeJsTesting";
import { ThreeFiberTesting } from "./pages/ThreeFiberTesting";
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
      <ThreeFiberCanvas />
      <Header />
      <ButtonToTop />
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
