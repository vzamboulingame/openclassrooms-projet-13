import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Home component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Home() {
  return (
    <div>
      <Header />
      <main className="main"></main>
      <Footer />
    </div>
  );
}
