const InitialAnimation = () => {
  return (
    <div className="h-dvh w-full flex flex-col justify-end absolute z-100">
      <div className="h-full w-full absolute -z-5 flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className={`bg-primary h-full basis-full slice`} key={i}></div>
        ))}
      </div>
      <div className="text-white cont">
        <p className="ml-10 -mb-10 font-light max-md:hidden">Data Processing</p>
        <div className="flex items-center gap-3 max-md:hidden">
          <div className="horizontal-line w-100 line1"></div>
          <img
            src="src/assets/energy.png"
            alt="Energy"
            className="opacity-0 energy"
          />
          <div className="horizontal-line w-80 line2 invisible"></div>
          <img
            src="src/assets/dots.png"
            alt="Energy"
            className="opacity-0 dots"
          />
          <div className="horizontal-line w-60 line3 invisible"></div>
          <img
            src="src/assets/lines.png"
            alt="Energy"
            className="opacity-0 lines"
          />
          <div className="horizontal-line w-47 line4 invisible"></div>
        </div>
        <div className="flex flex-col items-center absolute right-10 top-0 h-[80%] md:hidden">
          <div className="vertical-line h-0 line1"></div>
          <img
            src="src/assets/energy.png"
            alt="Energy"
            className="opacity-0 max-w-20 energy"
          />
          <div className="vertical-line h-0 line2 invisible"></div>
          <img
            src="src/assets/dots.png"
            alt="Energy"
            className="opacity-0 max-w-20 dots"
          />
          <div className="vertical-line h-0 line3 invisible"></div>
          <img
            src="src/assets/lines.png"
            alt="Energy"
            className="opacity-0 max-w-20 lines"
          />
          <div className="vertical-line h-0 line4 invisible"></div>
        </div>
        <p className="ml-10 font-light md:hidden">Data Processing</p>
        <p className="text-[clamp(2rem,24vw,15rem)]">Ramos</p>
      </div>
    </div>
  );
};

export default InitialAnimation;
