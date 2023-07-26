import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { setUsername, setPassword, setRememberMe } from "../slices/signInSlice";

/**
 * SignIn component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("rememberMe");

    // Dispatch the Redux actions to store the input values in the Redux store
    dispatch(setUsername(usernameInput.value));
    dispatch(setPassword(passwordInput.value));
    dispatch(setRememberMe(rememberMeCheckbox.checked));

    // Reset the input fields after storing data in the Redux store
    usernameInput.value = "";
    passwordInput.value = "";
  };

  return (
    <div>
      <Header />
      <div className="signin">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="signin-header">
            <i className="signin-header-icon fa-solid fa-user-circle "></i>
            <h1 className="signin-header-text">Sign In</h1>
          </div>
          <div className="signin-input">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="signin-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="signin-remember">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button className="signin-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
