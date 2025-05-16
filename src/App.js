import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}
