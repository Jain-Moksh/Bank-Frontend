import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Billing from "./components/Billing";
import Bussiness from "./components/Bussiness";
import CardDeal from "./components/CardDeal";
import CTA from "./components/CTA";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Bussiness />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
