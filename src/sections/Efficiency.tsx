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
      className="mt-80 pl-30 text-dark-grey font-medium max-w-[90%]"
      id="efficiency-section"
    >
      <p className="text-9xl overflow-hidden">
        <span className="inline-block maximize">Maximize</span>{" "}
        <span className="text-grey inline-block efficiency">efficiency</span>
      </p>
      <p className="text-9xl overflow-hidden">
        <span className="inline-block with">with</span>{" "}
        <span className="inline-block our">our</span>{" "}
        <span className="inline-block intuitive">intuitive</span>
      </p>
      <div className="mt-20 flex justify-between items-center">
        <div
          className="h-40 max-w-40 w-full rounded-full bg-yellow flex flex-col justify-center text-center space-y-2"
          id="yellow-circle"
        >
          <p className="text-3xl">+30%</p>
          <p className="text-xs font-light">Speed up your productivity</p>
        </div>
        <div id="analytics-button">
          <AnalyticsServiceButton></AnalyticsServiceButton>
        </div>
      </div>
      <div className="bg-grey h-[1px] w-full mt-20 mb-20 opacity-50"></div>
      <div className="flex justify-between">
        <p className="basis-1/2 font-light leading-7 space-x-1" id="explore-p">
          <SplitText
            text="Explore traffic sources, page behavior, conversions and more to gain deep insight into your audience. With us, your business doesn’t just adapt – it evolves"
            spansClassName="explore-p-word"
            to="words"
          ></SplitText> 
        </p>
        <div className="flex gap-2">
          <div id="request-demo-button">
            <DirectionAwareHoverButton
              label="Request a demo"
              buttonClassName="bg-very-light-grey text-black hover:text-black px-15 py-5"
              flairClassName="bg-yellow"
            ></DirectionAwareHoverButton>
          </div>
          <div id="start-for-free-button">
            <DirectionAwareHoverButton
              label="Start for free"
              buttonClassName="bg-primary text-white hover:text-black px-15 py-5"
              flairClassName="bg-yellow"
            ></DirectionAwareHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Efficiency;
