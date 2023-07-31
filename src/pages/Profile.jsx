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
  return (
    <div>
      <Header />
      <div className="profile">
        <p className="profile-welcome">
          Welcome back <br />
          Username!
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
