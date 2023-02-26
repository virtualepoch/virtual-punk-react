import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThreeCanvas } from "./components/ThreeCanvas";
import { Header } from "./components/Header";
import { ButtonToTop } from "./components/ButtonToTop";
import "./App.css";
import { Home } from "./pages/Home";
import { Orders } from "./pages/Orders";
import { OrdersTwo } from "./pages/OrdersTwo";
import { General } from "./pages/General";
import { AddPartsServices } from "./pages/AddPartsServices";
import { AddressChange } from "./pages/AddressChange";
import { MADamageReported } from "./pages/MADamageReported";
import { ThreeJsTesting } from "./pages/ThreeJsTesting";

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
      <ThreeCanvas />
      <Header />
      <ButtonToTop />
      <section className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders-2" element={<OrdersTwo />} />
          <Route path="/general" element={<General />} />
          <Route path="/add-parts-services" element={<AddPartsServices />} />
          <Route path="/address-change" element={<AddressChange />} />
          <Route path="/ma-damage-reported" element={<MADamageReported />} />
          <Route path="/three-js-testing" element={<ThreeJsTesting />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
