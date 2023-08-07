import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserProfileMutation } from "../slices/apiSlice";
import {
  setId,
  setEmail,
  setFirstName,
  setLastName,
} from "../slices/profileSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Transaction from "../components/Transaction";

/**
 * Profile component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Profile() {
  const dispatch = useDispatch();
  const [getUserProfile] = useGetUserProfileMutation();
  const authToken = localStorage.getItem("token");
  const firstName = useSelector((state) => state.profile.firstName);

  useEffect(() => {
    // Call the getUserProfile mutation to retrieve the user profile data
    getUserProfile({
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    })
      .unwrap()
      .then((data) => {
        // Store the profile data in the Redux store
        dispatch(setId(data.body.id));
        dispatch(setEmail(data.body.email));
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
      })
      .catch((error) => {
        console.error("User profile fetch failed: ", error);
      });
  }, [getUserProfile, authToken, dispatch]);

  return (
    <div>
      <Header />
      <div className="profile">
        <p className="profile-welcome">
          Welcome back <br />
          {firstName}!
        </p>
        <button className="profile-button">Edit Name</button>
        <div className="profile-transactions">
          <Transaction
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            desc="Available Balance"
          />
          <Transaction
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            desc="Available Balance"
          />
          <Transaction
            title="Argent Bank Credit Card (x8349)"
            route
            amount="$184.30"
            desc="Current Balance"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
