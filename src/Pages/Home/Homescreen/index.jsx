import Github from "../../Github";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <div id="home">
      <HeroSection />
      <MySkills />
      <MyPortfolio />
      <Github/>
      <AboutMe />

      <Testimonial />
      <ContactMe />
      <Footer />
    </div>
  );
}
