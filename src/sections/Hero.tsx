import { SplitText } from "../components";
import { useHeroAnimation } from "../hooks";

type Props = {
  isInitialAnimationDone: boolean;
};

const Hero = ({ isInitialAnimationDone }: Props) => {
  useHeroAnimation(isInitialAnimationDone);
  return (
    <section
      className="mt-20 text-[clamp(1.5rem,8vw,8rem)] leading-none grid place-content-center font-outfit text-dark-grey space-y-5 relative invisible overflow-clip"
      id="hero-section"
    >
      <div className="flex gap-5 justify-center max-lg:flex-col-reverse">
        <div>
          <div className="flex overflow-hidden">
            <p className="ml-auto max-lg:mx-auto analytics">Analytics</p>
          </div>
          <p className="hero-text mr-20 second-p">
            <span className="that">that</span>
            <span className="text-grey helps">helps</span>
            <span className="you">you</span>
          </p>
        </div>
        <div className="hero-video">
          <video
            src="src/assets/ramos-promo-half.mp4"
            loop
            muted
            playsInline
            autoPlay
            id="hero-video"
          ></video>
        </div>
      </div>
      <p className="hero-text ml-10 third-p -mt-5">
        <span className="shape">shape</span>
        <span className="the">the</span>
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
