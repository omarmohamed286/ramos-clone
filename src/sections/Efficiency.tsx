import {
  AnalyticsServiceButton,
  DirectionAwareHoverButton,
  SplitText,
} from "../components";
import { useEfficiencyAnimation } from "../hooks";

const Efficiency = () => {
  useEfficiencyAnimation();
  return (
    <section
      className="mt-80 pl-30 max-sm:mx-auto max-lg:pl-5 leading-none text-dark-grey font-medium max-w-[90%] overflow-clip"
      id="efficiency-section"
    >
      <p className="efficiency-p">
        <span className="maximize">Maximize</span>{" "}
        <span className="text-grey efficiency">efficiency</span>
      </p>
      <p className="efficiency-p">
        <span className="with">with</span> <span className="our">our</span>{" "}
        <span className="intuitive">intuitive</span>
      </p>
      <div className="mt-20 flex-between-center gap-10 max-lg:flex-col">
        <div className="efficiency-circle" id="yellow-circle">
          <p className="text-3xl">+30%</p>
          <p className="text-xs font-light">Speed up your productivity</p>
        </div>
        <div id="analytics-button">
          <AnalyticsServiceButton></AnalyticsServiceButton>
        </div>
      </div>
      <div className="efficiency-separator"></div>
      <div className="flex justify-between gap-10 max-md:flex-col">
        <p className="basis-1/2 font-light leading-7 space-x-1" id="explore-p">
          <SplitText
            text="Explore traffic sources, page behavior, conversions and more to gain deep insight into your audience. With us, your business doesn’t just adapt – it evolves"
            spansClassName="explore-p-word"
            to="words"
          ></SplitText>
        </p>
        <div className="flex gap-2 max-sm:flex-col">
          <div id="request-demo-button" className="efficiency-btns-m">
            <DirectionAwareHoverButton
              label="Request a demo"
              buttonClassName="bg-very-light-grey text-black efficiency-btn"
              flairClassName="bg-yellow"
            ></DirectionAwareHoverButton>
          </div>
          <div id="start-for-free-button" className="efficiency-btns-m">
            <DirectionAwareHoverButton
              label="Start for free"
              buttonClassName="bg-primary text-white efficiency-btn"
              flairClassName="bg-yellow"
            ></DirectionAwareHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Efficiency;
