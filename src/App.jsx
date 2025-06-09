import Hero from "./sections/Hero";
import ParallaxBackground from "./components/ParallaxBackground";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const App = () => {
  useSmoothScroll({
    friction: 0.95,
    threshold: 0.1,
  });
  return (
    <>
      <div className="container mx-auto">
        <ParallaxBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
