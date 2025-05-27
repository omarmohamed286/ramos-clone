import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  label: string;
  buttonClassName: string;
  flairClassName: string;
};

const DirectionAwareHoverButton = ({
  label,
  buttonClassName,
  flairClassName,
}: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const flairRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    const el = gsap.utils.selector(buttonRef);
    const flair = el(".signup-button-flair");
    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");
    const getXY = (e: MouseEvent) => {
      const { left, top, width, height } =
        buttonRef.current?.getBoundingClientRect()!;
      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    };

    if (buttonRef) {
      buttonRef.current?.addEventListener("mouseenter", (e) => {
        const { x, y } = getXY(e);
        xSet(x);
        ySet(y);
        gsap.to(flair, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      buttonRef.current?.addEventListener("mouseleave", (e) => {
        const { x, y } = getXY(e);
        gsap.killTweensOf(flair);
        gsap.to(flair, {
          xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
          yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
          scale: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      buttonRef.current?.addEventListener("mousemove", (e) => {
        const { x, y } = getXY(e);
        gsap.to(flair, {
          xPercent: x,
          yPercent: y,
          duration: 0.4,
          ease: "power2",
        });
      });
    }
  });

  return (
    <button
      ref={buttonRef}
      className={`group inline-flex items-center rounded-[1rem] cursor-pointer font-light gap-1.5 justify-center overflow-hidden relative ${buttonClassName}`}
    >
      <span
        ref={flairRef}
        className="signup-button-flair absolute inset-0 pointer-events-none scale-0 origin-[0_0] will-change-transform"
      >
        <span
          className={`absolute left-0 top-0 block w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none content-[''] ${flairClassName}`}
        ></span>
      </span>
      <span className="relative text-center transition-colors delay-[150ms] ease-in-out">
        {label}
      </span>
    </button>
  );
};

export default DirectionAwareHoverButton;
