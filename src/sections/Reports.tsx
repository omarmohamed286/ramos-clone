import { SplitText } from "../components";
import { useReportsAnimation } from "../hooks";

const RightContainerSvg = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="20"
        viewBox="0 0 31 18"
        fill="none"
        className="mx-auto"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.9985 9.09996L15.5985 1L1.19861 9.09996L15.5985 17.1999L29.9985 9.09996Z"
          stroke="#FFD027"
          strokeWidth="1.32924"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="20"
        viewBox="0 0 31 14"
        fill="none"
        className="-mt-2.5 mx-auto"
      >
        <path
          d="M8.19996 1L1 5.04998L15.3999 13.1499L29.7999 5.04998L22.5999 1"
          stroke="#FFD027"
          strokeWidth="1.32924"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="20"
        viewBox="0 0 31 14"
        fill="none"
        className="-mt-2.5 mx-auto"
      >
        <path
          d="M8.19996 1L1 5.04998L15.3999 13.1499L29.7999 5.04998L22.5999 1"
          stroke="#FFD027"
          strokeWidth="1.32924"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </>
  );
};

const LeftContainerSvg = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 16 15"
        fill="none"
        className="ml-25"
      >
        <rect
          x="0.933472"
          y="0.149902"
          width="14.277"
          height="14.277"
          rx="7.1385"
          fill="#48C884"
        ></rect>
        <path
          d="M8.07647 3.94678V10.6347"
          stroke="white"
          strokeWidth="0.669235"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.40527 6.62548L8.07195 3.94141L10.7386 6.62548"
          stroke="white"
          strokeWidth="0.669235"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </>
  );
};

const Reports = () => {
  useReportsAnimation();
  return (
    <div className="overflow-hidden">
      <section
        className="mt-100 text-dark-grey max-w-[90%] mx-auto font-urbanist"
        id="reports-section"
      >
        <div className="flex gap-5 max-lg:flex-col">
          <article className="basis-full">
            <header>
              <h2 className="text-6xl font-medium max-w-[20ch] w-full left-p">
                Your key to strategic success through analytics
              </h2>
            </header>
            <article className="reports-left-container left-container">
              <div className="basis-full">
                <button className="reports-left-container-m px-3 py-4 bg-yellow rounded-xl text-xl font-light">
                  Setting up reports
                </button>
                <p className="reports-left-container-m mt-20 text-3xl max-w-[17ch] w-full">
                  Fast and easy access to analytics
                </p>
                <p className="reports-left-container-m mt-5 text-xl text-grey max-w-[30ch] w-full">
                  One platform is a comprehensive system of solutions that will
                  be the first step towards digitalization of your business!
                </p>
              </div>
              <div className="basis-full">
                <img
                  src="src/assets/sales-statistics.png"
                  alt="Sales Statistics"
                />
              </div>
            </article>
          </article>
          <article className="basis-2/3">
            <header>
              <h2 className="text-2xl font-light max-w-[25ch] ml-auto max-lg:ml-0">
                Ready for exciting, instantaneous, all-accessible insights in
                real time?
              </h2>
            </header>
            <article className="reports-right-container right-container">
              <div className="flex justify-center gap-3">
                <div className="reports-right-container-feature grid place-content-center">
                  <RightContainerSvg></RightContainerSvg>
                  <div className="flex mt-5">
                    <img
                      src="src/assets/girl1.jpg"
                      alt="Girl"
                      className="max-w-10 h-10 reports-right-container-girl"
                    />
                    <img
                      src="src/assets/girl2.jpg"
                      alt="Girl"
                      className="max-w-11 h-11 border-2 border-light-black -ml-2 reports-right-container-girl"
                    />
                  </div>
                </div>
                <div className="reports-right-container-feature space-y-2">
                  <p className="ml-5">Transactions</p>
                  <div className="flex items-center">
                    <LeftContainerSvg></LeftContainerSvg>
                    <p className="text-light-green text-xs">+14%</p>
                  </div>
                  <p className="text-6xl font-medium ml-5">43K</p>
                </div>
              </div>
              <div className="text-center mt-5">
                <p className="text-3xl">Widget control</p>
                <p className="text-grey text-xl max-w-[40ch] w-full mx-auto mt-5 font-extralight">
                  Reports provide a comprehensive overview of important aspects
                  of web analytics
                </p>
              </div>
            </article>
          </article>
        </div>
        <div
          className="mt-40 flex-center gap-10 max-sm:flex-col"
          id="reports-paragraph"
        >
          <div className="flex gap-2">
            <p className="reports-paragraph-text text-3xl space-x-1">
              <SplitText
                text="Up to"
                spansClassName="up-to"
                to="words"
              ></SplitText>
            </p>
            <p className="reports-paragraph-text text-9xl -mb-4">
              <SplitText
                text="45%"
                spansClassName="text45"
                to="chars"
              ></SplitText>
            </p>
          </div>
          <p className="w-full max-w-[50ch] self-end text-xl space-x-1">
            <SplitText
              text="Increase your analytics efficiency by up to 45%. Unique algorithms provide insights from data, reduce time for analysis and save time for making important, informed decisions"
              spansClassName="reports-paragraph-word"
              to="words"
            ></SplitText>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Reports;
