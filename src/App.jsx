import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-dvh" />
    </div>
  );
};
export default App;
