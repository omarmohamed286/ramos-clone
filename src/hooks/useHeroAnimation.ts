import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useHeroAnimation = (isInitialAnimationDone: boolean) => {
  useGSAP(() => {
    if (isInitialAnimationDone) {
      const tl = gsap.timeline();
      tl.to("#hero-section", {
        autoAlpha: 1,
        duration: 0,
      });
      tl.from("#hero-video", {
        scaleX: 0,
        duration: 1.5,
        transformOrigin: "left 50%",
        ease: "power4.out",
      });

      const wordsToAnimate = [".analytics", ".that", ".you", ".shape"];
      wordsToAnimate.forEach((target) => {
        tl.from(
          target,
          {
            rotate: 90,
            transformOrigin: "left 50%",
            duration: 1.5,
            ease: "power4.out",
          },
          "<"
        );
      });

      tl.from(
        ".that",
        {
          rotateX: 180,
          duration: 2,
          ease: "power4.in",
        },
        "<"
      );

      tl.from(
        ".helps",
        {
          scale: 1.5,
          duration: 1,
          opacity: 0,
        },
        "<"
      );
      tl.from(
        ".the",
        {
          y: 100,
          opacity: 0,
        },
        "<"
      );
      tl.from(
        ".char",
        {
          rotateX: 90,
          stagger: {
            amount: 0.8,
          },
          ease: "power4.out",
        },
        "<"
      );
      const paragraphsToAnimate = [".second-p", ".third-p"];
      paragraphsToAnimate.forEach((target, i) => {
        const x = 50;
        gsap.to(target, {
          x: i === 0 ? -x : x,
          ease: "power4.out",
          scrollTrigger: {
            start: 0,
            end: "+=500",
            scrub: 2,
          },
        });
      });
    }
  }, [isInitialAnimationDone]);
};

export default useHeroAnimation;
