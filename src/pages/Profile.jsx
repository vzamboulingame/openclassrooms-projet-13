import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetUserProfileMutation,
  useUpdateUserProfileMutation
} from "../slices/apiSlice";
import {
  setId,
  setEmail,
  setFirstName,
  setLastName
} from "../slices/profileSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Transaction from "../components/Transaction";

/**
 * Profile component.
 *
 * @returns {JSX.Element} - Rendered component.
 */
export default function Profile() {
  const dispatch = useDispatch();
  const [getUserProfile] = useGetUserProfileMutation();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const [editMode, setEditMode] = useState(false);

  const startEdit = () => {
    setEditMode(true);
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const saveEdit = async () => {
    const body = JSON.stringify({
      firstName: await document.getElementById("firstNameInput").value,
      lastName: await document.getElementById("lastNameInput").value
    });

    console.log(body);

    updateUserProfile(body)
      .unwrap()
      .then((data) => {
        console.log(data);
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
        setEditMode(false);
      })
      .catch((error) => {
        console.error("User profile update failed: ", error);
      });
  };

  useEffect(() => {
    getUserProfile()
      .unwrap()
      .then((data) => {
        dispatch(setId(data.body.id));
        dispatch(setEmail(data.body.email));
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
      })
      .catch((error) => {
        console.error("User profile fetch failed: ", error);
      });
  }, [dispatch, getUserProfile]);

  return (
    <div>
      <Header />
      <div className="profile">
        {editMode ? (
          <div className="profile-header">
            <p className="profile-welcome">Welcome back</p>
            <div className="profile-edit">
              <div className="profile-edit-zone">
                <input
                  className="profile-edit-input"
                  type="text"
                  id="firstNameInput"
                  name="firstNameInput"
                  placeholder={firstName}
                />
                <input
                  className="profile-edit-input"
                  type="text"
                  id="lastNameInput"
                  name="lastNameInput"
                  placeholder={lastName}
                />
              </div>
              <div className="profile-edit-zone">
                <button className="profile-edit-button save" onClick={saveEdit}>
                  Save
                </button>
                <button
                  className="profile-edit-button cancel"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-header">
            <p className="profile-welcome">Welcome back</p>
            <p className="profile-welcome">
              {firstName} {lastName}!
            </p>
            <button className="profile-button" onClick={startEdit}>
              Edit Name
            </button>
          </div>
        )}

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
