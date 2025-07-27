import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import { ScrollTrigger } from "gsap/all";
import Message from "./section/Message";
import Flavors from "./section/Flavors";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Message />
      <Flavors />
      <div className="w-full h-dvh" />
    </div>
  );
};
export default App;
