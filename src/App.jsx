import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import { ScrollTrigger } from "gsap/all";
import Message from "./section/Message";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Message />
    </div>
  );
};
export default App;
