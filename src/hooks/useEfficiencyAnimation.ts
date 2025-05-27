import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const scaleAnimation: gsap.TweenVars = {
  scale: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "#analytics-button",
    start: "top bottom",
  },
};

const useEfficiencyAnimation = () => {
  useGSAP(() => {
    gsap.from("#yellow-circle", scaleAnimation);
    gsap.from("#analytics-button", scaleAnimation);
    const wordsToAnimate = [
      ".maximize",
      ".efficiency",
      ".with",
      ".our",
      ".intuitive",
    ];
    wordsToAnimate.forEach((target) => {
      gsap.from(target, {
        autoAlpha:0, 
        rotate: 90,
        transformOrigin: "left 50%",
        duration: 2.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#efficiency-section",
          start: "30% bottom",
        },
      });
    });
    const buttonsToAnimate = ["#request-demo-button", "#start-for-free-button"];
    buttonsToAnimate.forEach((target) => {
      gsap.from(target, {
        scale: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: target,
          start: "20% bottom", 
        },
      });
    });
    gsap.from(".explore-p-word", {
      opacity: 0, 
      duration: 5,  
      stagger: 0.01,
      ease:"power4.out",
      scrollTrigger: {
        trigger: "#explore-p",
        start: "bottom bottom",
      },
    });
  });
};

export default useEfficiencyAnimation;
