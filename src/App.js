import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { ButtonToTop } from "./components/ButtonToTop";
import "./App.css";
import { Home } from "./pages/Home";
import { Orders } from "./pages/Orders";
import { OrdersTwo } from "./pages/OrdersTwo";
import { General } from "./pages/General";
import { Testing } from "./pages/Testing";

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
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders-2" element={<OrdersTwo />} />
          <Route path="/general" element={<General />} />
          <Route path="/testing" element={<Testing />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
