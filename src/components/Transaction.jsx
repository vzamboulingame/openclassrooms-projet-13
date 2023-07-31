/**
 * Transaction component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Transaction(props) {
  return (
    <div className="transaction">
      <div className="transaction-details">
        <p className="transaction-title">{props.title}</p>
        <p className="transaction-amount">{props.amount}</p>
        <p className="transaction-desc">{props.desc}</p>
      </div>
      <button className="transaction-button">View transactions</button>
    </div>
  );
}
