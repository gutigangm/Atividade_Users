import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PerfilCardStyled from "./PerfilCardStyled";
import PerfilCardTailwind from "./PerfilCardTailwind";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/styled" element={<PerfilCardStyled />} />
        <Route path="/tailwind" element={<PerfilCardTailwind />} />
      </Routes>
    </Router>
  );
}

export default App;
