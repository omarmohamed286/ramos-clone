import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const containersScrollTrigger: ScrollTrigger.Vars = {
  trigger: "#reports-section",
  start: "20% bottom",
  end: "top top",
  scrub: 2,
};

const useReportsAnimation = () => {
  useGSAP(() => {
    gsap.from(".left-p", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#reports-section",
        start: "top bottom",
        end: "+=200px",
        scrub: true,
      },
    });
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.from(".right-container", {
        rotate: 45,
        transformOrigin: "left 100%",
        scrollTrigger: containersScrollTrigger,
      });
      gsap.from(".left-container", {
        rotate: -45,
        transformOrigin: "right 100%",
        scrollTrigger: containersScrollTrigger,
      });
    });
    gsap.from(".reports-paragraph-word", {
      opacity: 0,
      duration: 5,
      stagger: 0.01,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".reports-paragraph-word",
        start: "bottom bottom",
      },
    });
    gsap.from(".up-to", {
      opacity: 0,
      duration: 5,
      stagger: 0.01,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".up-to",
        start: "bottom bottom",
      },
    });
    gsap.from(".text45", {
      opacity: 0,
      duration: 5,
      stagger: 0.01,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".text45",
        start: "bottom bottom",
      },
    });
  });
};

export default useReportsAnimation;
