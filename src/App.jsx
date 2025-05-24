import Hero from "./sections/Hero";
import ParallaxBackground from "./components/ParallaxBackground";
import Navbar from "./sections/Navbar";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contant from "./sections/Contant";
import { useLenis } from "./hooks/useLenis";

const App = () => {
  // useLenis();
  return (
    <div className="container mx-auto">
      <ParallaxBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contant />
    </div>
  );
};

export default App;
