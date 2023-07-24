import { Link } from "react-router-dom";
import logo from "../images/argentBankLogo.png";

/**
 * Header component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/">
          <img className="header-logo" src={logo} alt="Logo Argent Bank" />
        </Link>
        <Link to="/login">
          <p>Sign In</p>
        </Link>
      </div>
    </header>
  );
}
