import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Equipamento from "./pages/EquipamentoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/equipamento/:id" element={<Equipamento />} />
      </Routes>
    </div>
  );
}

export default App;
