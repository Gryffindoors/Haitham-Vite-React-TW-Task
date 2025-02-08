import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Appoint from "./Pages/Appoint";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/appointment" element={<Appoint />} />
      </Routes>
    </Router>
  );
}

export default App;
