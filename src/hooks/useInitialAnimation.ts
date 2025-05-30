import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const immediateVisibility: gsap.TweenVars = { autoAlpha: 1, duration: 0 };

const lineAnimationObj: gsap.TweenVars = { width: 0, duration: 0.8 };

const iconAnimationObj: gsap.TweenVars = { scale: 0, rotate: 180 };

const smallScreenLineAnimationObj: gsap.TweenVars = {
  duration: 0.8,
  height: "15%",
};

const useInitialAnimation = () => {
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false);
  const [isTimelineDone, setIsTimelineDone] = useState(false);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({ onComplete: () => setIsTimelineDone(true) });
      tl.from(".line1", lineAnimationObj);
      tl.to(".energy", immediateVisibility).from(".energy", iconAnimationObj);
      tl.to(".line2", immediateVisibility).from(".line2", lineAnimationObj);
      tl.to(".dots", immediateVisibility).from(".dots", iconAnimationObj);
      tl.to(".line3", immediateVisibility).from(".line3", lineAnimationObj);
      tl.to(".lines", immediateVisibility).from(".lines", iconAnimationObj);
      tl.to(".line4", immediateVisibility)
        .from(".line4", lineAnimationObj)
        .to(".cont", { autoAlpha: 0 });
      tl.to(".slice", {
        height: 0,
        duration: 2.5,
        ease: "power4.out",
        stagger: 0.15,
        reversed: true,
      });
      const totalDuration = tl.duration();
      gsap.delayedCall(totalDuration - 2, () => {
        setIsInitialAnimationDone(true);
      });
    });
    mm.add("(max-width: 768px)", () => {
      const tl = gsap.timeline({ onComplete: () => setIsTimelineDone(true) });
      tl.to(".line1", smallScreenLineAnimationObj);
      tl.to(".energy", immediateVisibility).from(".energy", iconAnimationObj);
      tl.to(".line2", immediateVisibility).to(
        ".line2",
        smallScreenLineAnimationObj
      );
      tl.to(".dots", immediateVisibility).from(".dots", iconAnimationObj);
      tl.to(".line3", immediateVisibility).to(
        ".line3",
        smallScreenLineAnimationObj
      );
      tl.to(".lines", immediateVisibility).from(".lines", iconAnimationObj);
      tl.to(".line4", immediateVisibility)
        .to(".line4", smallScreenLineAnimationObj)
        .to(".cont", { autoAlpha: 0 });
      tl.to(".slice", {
        height: 0,
        duration: 2.5,
        ease: "power4.out",
        stagger: 0.15,
        reversed: true,
      });
      const totalDuration = tl.duration();
      gsap.delayedCall(totalDuration - 2, () => {
        setIsInitialAnimationDone(true);
      });
    });
  });

  return { isInitialAnimationDone, isTimelineDone };
};

export default useInitialAnimation;
