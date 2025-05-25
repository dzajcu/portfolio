import Hero from "./sections/Hero";
import ParallaxBackground from "./components/ParallaxBackground";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contant from "./sections/Contant";
import Skills from "./sections/Skills";
import { useLenis } from "./hooks/useLenis";

const App = () => {
  // useLenis();
  return (
    <div className="container mx-auto">
      <ParallaxBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contant />
    </div>
  );
};

export default App;
