import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  setUsername,
  setPassword,
  setRememberMe,
  setAuthToken,
} from "../slices/signInSlice";
import { useLoginMutation } from "../slices/apiSlice";

/**
 * SignIn component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract the login mutation using RTK Query custom hook
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const rememberMeCheckbox = document.getElementById("rememberMe").checked;

    // Dispatch the Redux actions to store the input values in the Redux store
    dispatch(setUsername(usernameInput));
    dispatch(setPassword(passwordInput));
    dispatch(setRememberMe(rememberMeCheckbox));

    // Call the login mutation to authenticate the user and get the JWT token
    try {
      const { data } = await login({
        email: usernameInput,
        password: passwordInput,
      });

      // Store the JWT token in the Redux store
      dispatch(setAuthToken(data.body.token));

      // Reset the input fields after storing data in the Redux store
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";

      data.body.token && navigate("/profile");
    } catch (error) {
      console.error("Login failed:", error);
    }
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
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="on"
            />
          </div>
          <div className="signin-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="on"
            />
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
