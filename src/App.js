import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { ButtonToTop } from "./components/ButtonToTop";
import { WireBoxUnderlay } from "./components/WireBoxUnderlay";
import "./App.css";
import { Home } from "./pages/Home";
import { Orders } from "./pages/Orders";
import { Canceling } from "./pages/Canceling";

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
      <WireBoxUnderlay />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/canceling" element={<Canceling />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
