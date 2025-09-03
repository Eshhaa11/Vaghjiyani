import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import servicespage from "./pages/servicespage"
import projectspage from "./pages/projectspage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<servicespage />} />
        
      </Routes>
    </Router>
  );
};

export default App;