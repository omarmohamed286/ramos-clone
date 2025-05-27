import { SplitText } from "../components";
import { useHeroAnimation } from "../hooks";

type Props = {
  isInitialAnimationDone: boolean;
};

const Hero = ({ isInitialAnimationDone }: Props) => {
  useHeroAnimation(isInitialAnimationDone);
  return (
    <section
      className="mt-20 pl-20 text-9xl grid place-content-center font-outfit text-dark-grey space-y-5 relative invisible overflow-clip"
      id="hero-section"
    >
      <div className="flex gap-5 justify-center">
        <div>
          <div className="flex overflow-hidden">
            <p className="ml-auto analytics">Analytics</p>
          </div>
          <p className="mr-20 overflow-hidden space-x-10 second-p whitespace-nowrap">
            <span className="inline-block that">that</span>
            <span className="text-grey inline-block helps">helps</span>
            <span className="inline-block you">you</span>
          </p>
        </div>
        <div className="max-w-md w-full aspect-video">
          <video
            src="src/assets/ramos-promo-half.mp4"
            loop
            muted
            playsInline
            autoPlay
            className="rounded-4xl "
            id="hero-video"
          ></video>
        </div>
      </div>
      <p className="ml-10 overflow-hidden space-x-10 third-p mx-auto">
        <span className="inline-block shape">shape</span>
        <span className="inline-block the">the</span>
        <span className="whitespace-nowrap">
          <SplitText
            text="future"
            spansClassName="char inline-block"
            to="chars"
          ></SplitText>
        </span>
      </p>
    </section>
  );
};

export default Hero;
