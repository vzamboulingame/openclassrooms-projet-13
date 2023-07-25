/**
 * Feature component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Feature(props) {
  return (
    <div className="feature">
      <img src={props.icon} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-title">{props.title}</h3>
      <p className="feature-text">{props.text}</p>
    </div>
  );
}
