import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * NotFound component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="notfound">
        <h1 className="notfound-code">404</h1>
        <p className="notfound-text">Page not found</p>
        <Link className="notfound-link" to="/">
          Return to home page
        </Link>
      </div>
      <Footer />
    </div>
  );
}
