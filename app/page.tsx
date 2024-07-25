import Image from "next/image";
import styles from "../app/style"
import {Bussiness, Billing, Button, CardDeal, Clients, CTA, GetStarted, Hero, NavBar, Stats, Testimonials} from "../app/components"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Hero/>
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
         <Footer/>
      </div>
    </div>
  </div>
  );
}
