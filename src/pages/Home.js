import Paragraph from "../components/Paragraph";
import AboutUs from "../components/AboutUs";
import FeaturedWork from "../components/FeaturedWork";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navigation/Navbar";
import Services from "../components/Services";
import GetInTouch from "../components/GetInTouch";
import Marquee from "../components/Marquee";

export default function Home() {
  return (
    <section className='container mx-auto'>
      <Navbar />
      <Header />
      <Marquee />
      <Services />
      <FeaturedWork />
      <Paragraph />
      <AboutUs />
      <GetInTouch />
      <Footer />
    </section>
  );
}
