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
    <header className="header container">
      <Link to="/">
        <img className="header-logo" src={logo} alt="Argent Bank Logo" />
      </Link>
      <div className="header-signin">
        <i class="header-signin-icon fa-solid fa-user-circle"></i>
        <Link className="header-signin-link" to="/signin">
          Sign In
        </Link>
      </div>
    </header>
  );
}
