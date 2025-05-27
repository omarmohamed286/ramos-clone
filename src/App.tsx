import { InitialAnimation } from "./components";
import { NavBar, Hero, Reports, Efficiency, Turning } from "./sections";
import { useInitialAnimation } from "./hooks";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { isInitialAnimationDone, isTimelineDone } = useInitialAnimation();
  return (
    <>
      {!isTimelineDone && <InitialAnimation></InitialAnimation>}
      <div
        className="h-dvh selection:bg-primary selection:text-white bg-light-white"
        style={{
          overflow: isInitialAnimationDone ? "unset" : "hidden",
        }}
      >
        <div>
          <NavBar></NavBar>
          <Hero isInitialAnimationDone={isInitialAnimationDone}></Hero>
          <Reports></Reports>
          <Efficiency></Efficiency>
          <Turning></Turning>
        </div>
      </div>
    </>
  );
};

export default App;
