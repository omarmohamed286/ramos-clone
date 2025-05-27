import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnalyticsServiceButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const flairRef = useRef<HTMLSpanElement | null>(null);
  const labelTrackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = gsap.utils.selector(buttonRef);
    const flair = el(".analytics-button-flair");
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

    if (buttonRef.current) {
      buttonRef.current.addEventListener("mouseenter", (e) => {
        const { x, y } = getXY(e);
        xSet(x);
        ySet(y);
        gsap.to(flair, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      buttonRef.current.addEventListener("mouseleave", (e) => {
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
      buttonRef.current.addEventListener("mousemove", (e) => {
        const { x, y } = getXY(e);
        gsap.to(flair, {
          xPercent: x,
          yPercent: y,
          duration: 0.4,
          ease: "power2",
        });
      });
    }

    if (labelTrackRef.current) {
      gsap.to(labelTrackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 50,
        ease: "linear",
        scrollTrigger: {
          trigger: labelTrackRef.current,
          start: "top bottom",
        },
      });
    }
  });

  return (
    <button
      ref={buttonRef}
      className="group inline-flex w-fit max-w-140 flex-none items-center bg-yellow rounded-[5rem] text-light-black cursor-pointer font-medium gap-1.5 justify-center py-10 overflow-hidden relative hover:text-white"
    >
      <span
        ref={flairRef}
        className="analytics-button-flair absolute inset-0 pointer-events-none scale-0 origin-[0_0] will-change-transform"
      >
        <span className="absolute left-0 top-0 block w-[200%] aspect-square bg-primary -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none content-['']"></span>
      </span>

      <div className="overflow-hidden relatihve w-full h-full flex items-center justify-center">
        <div
          ref={labelTrackRef}
          className="flex whitespace-nowrap gap-12 analytics-button-label"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="text-9xl">
              analytics service
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default AnalyticsServiceButton;
