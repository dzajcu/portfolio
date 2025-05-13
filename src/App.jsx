import Hero from "./sections/Hero";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
