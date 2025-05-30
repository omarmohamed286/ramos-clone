import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const iconsAnimation: gsap.TweenVars = {
  rotate: 135,
  duration: 1,
  ease: "power4.out",
};

 

const useTurningAnimation = () => {
  const [timeline1, setTimeline1] = useState<gsap.core.Timeline | undefined>(
    undefined
  );
  const [timeline2, setTimeline2] = useState<gsap.core.Timeline | undefined>(
    undefined
  );
  const [timeline3, setTimeline3] = useState<gsap.core.Timeline | undefined>(
    undefined
  );
  const [isFeatureHovering, setIsFeatureHovering] = useState(false);
  const [featureAnimationState, setFeatureAnimationState] = useState<
    "idle" | "playing" | "done"
  >("idle");
  const [currentFeature, setCurrentFeature] = useState<
    "none" | "feature1" | "feature2" | "feature3"
  >("none");
  const [feature1Number, setFeature1Number] = useState(15263);
  useEffect(() => {
    const timlinesMap = {
      feature1: timeline1,
      feature2: timeline2,
      feature3: timeline3,
    };
    if (currentFeature != "none") {
      const tl = timlinesMap[currentFeature];
      if (isFeatureHovering && featureAnimationState != "playing") {
        tl?.play();
      }
      if (!isFeatureHovering && featureAnimationState == "done") {
        setFeature1Number(15263)
        tl?.reverse();
      }
    }
  }, [isFeatureHovering, featureAnimationState]);

  useGSAP(() => {
    const pathsToAnimateDown = [
      ".path1",
      ".path3",
      ".path5",
      ".path8",
      ".path10",
      ".path12",
    ];
    pathsToAnimateDown.forEach((target) => {
      gsap.to(target, {
        scaleY: 0.5,
        y: 20,
        duration: 2,
        transformOrigin: "bottom",
        ease: "linear",
        scrollTrigger: {
          trigger: "#turning-section",
          start: "center bottom",
          end: "+=800px",
          scrub: 1,
        },
      });
    });
    const pathsToAnimateUp = [
      ".path2",
      ".path4",
      ".path6",
      ".path7",
      ".path9",
      ".path11",
    ];
    pathsToAnimateUp.forEach((target) => {
      gsap.to(target, {
        scaleY: 1.2,
        y: 50,
        duration: 2,
        transformOrigin: "bottom",
        ease: "linear",
        scrollTrigger: {
          trigger: "#turning-section",
          start: "center bottom",
          end: "+=800px",
          scrub: 1,
        },
      });
    });
    gsap.to(".ipad", {
      y: -100,
      scrollTrigger: {
        trigger: "#turning-section",
        start: "top bottom",
        end: "+=600px",
        scrub: 1,
      },
    });
    gsap.from(".turning-p-word", {
      rotate: 90,
      autoAlpha: 0,
      transformOrigin: "left 50%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#turning-section",
        start: "20% bottom",
      },
    });
    const tl1 = gsap.timeline({
      paused: true,
      onStart: () => {
        setFeatureAnimationState("playing");
      },
      onComplete: () => {
        setFeature1Number(33382);
        setFeatureAnimationState("done");
      },
    });
    tl1.to(".feature1", {
      paddingBottom: 320,
      zIndex: 100,
    });
    tl1.to(".plus-icon1", iconsAnimation, "<");
    setTimeline1(tl1);
    const tl2 = gsap.timeline({
      paused: true,
      onStart: () => {
        setFeatureAnimationState("playing");
      },
      onComplete: () => {
        setFeatureAnimationState("done");
      },
    });
    tl2.to(".feature2", {
      paddingBottom: 300,
      y: -100,
      zIndex: 100,
    });
    tl2.to(".plus-icon2", iconsAnimation, "<");
    setTimeline2(tl2);
    const tl3 = gsap.timeline({
      paused: true,
      onStart: () => {
        setFeatureAnimationState("playing");
      },
      onComplete: () => {
        setFeatureAnimationState("done");
      },
    });
    tl3.to(".feature3", {
      paddingBottom: 250,
      y: -250,
      zIndex: 100,
    });
    tl3.to(".plus-icon3", iconsAnimation, "<");
    setTimeline3(tl3);
  });

  return {
    feature1Number,
    setIsFeatureHovering,
    setCurrentFeature,
  };
};

export default useTurningAnimation;
