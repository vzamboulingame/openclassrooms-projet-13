import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import "../styles/style.scss";

/**
 * Main App component.
 *
 * @param {void}
 * @returns {JSX.Element} Rendered component.
 */

export default function App() {
  const authToken = useSelector((state) => state.signIn.authToken);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={authToken ? <Profile /> : <SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
