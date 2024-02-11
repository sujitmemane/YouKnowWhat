import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Confessions from "./pages/Confessions";
import CrushReveal from "./pages/CrushReveal";
import DarkSecret from "./pages/DarkSecret";
import { Fetishes } from "./pages/Fetishes";
import IdealPartner from "./pages/IdealPartner";
import Proposals from "./pages/Proposals";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confessions" element={<Confessions />} />
          <Route path="/crush-reveal" element={<CrushReveal />} />
          <Route path="/dark-secret" element={<DarkSecret />} />
          <Route path="/fetishes" element={<Fetishes />} />
          <Route path="/ideal-partner" element={<IdealPartner />} />
          <Route path="/proposals" element={<Proposals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
