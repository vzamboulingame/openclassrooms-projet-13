import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import chatIcon from "../images/icon-chat.png";
import moneyIcon from "../images/icon-money.png";
import securityIcon from "../images/icon-security.png";

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
      <div className="home">
        <Hero />
        <section className="home-features">
          <Feature
            icon={chatIcon}
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes"
          />
          <Feature
            icon={moneyIcon}
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />
          <Feature
            icon={securityIcon}
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}
