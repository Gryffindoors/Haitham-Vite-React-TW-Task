import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Appoint from "./Pages/Appoint";
import NotFound from "./Pages/NotFound";
import SingleBlog from "./Pages/BlogSingle";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/appointment" element={<Appoint />} />
        <Route path="/blogSingle" element={<SingleBlog />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
