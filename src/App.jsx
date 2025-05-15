import Hero from "./sections/Hero";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./sections/Navbar";
import Experience from "./sections/Experience";
const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Experience />
    </>
  );
};

export default App;
