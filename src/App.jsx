import Hero from "./sections/Hero";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./sections/Navbar";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
    </>
  );
};

export default App;
