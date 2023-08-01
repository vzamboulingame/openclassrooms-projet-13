import { Link, useLocation } from "react-router-dom";
import logo from "../images/argentBankLogo.png";

/**
 * Header component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Header() {
  const location = useLocation();
  const isProfileCurrentPage = location.pathname === "/profile";

  return (
    <header className="header container">
      <Link to="/">
        <img className="header-logo" src={logo} alt="Argent Bank Logo" />
      </Link>
      {isProfileCurrentPage ? (
        <div className="header-signin">
          <i className="header-signin-icon fa-solid fa-user-circle"></i>
          <Link className="header-signin-link" to="#">
            Username
          </Link>
          <i className="header-signin-icon fa-solid fa-sign-out"></i>
          <Link className="header-signin-link" to="/">
            Sign Out
          </Link>
        </div>
      ) : (
        <div className="header-signin">
          <i className="header-signin-icon fa-solid fa-user-circle"></i>
          <Link className="header-signin-link" to="/signin">
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
