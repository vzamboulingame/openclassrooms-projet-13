import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import "../styles/style.scss";

/**
 * Main App component.
 *
 * @param {void}
 * @returns {JSX.Element} Rendered component.
 */

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
