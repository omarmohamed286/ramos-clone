import NumberFlow from "@number-flow/react";

type Props = {
  value: number;
};

const TurningNumberFlow = ({ value }: Props) => {
  return (
    <NumberFlow
      value={value}
      format={{
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }}
      transformTiming={{ duration: 400, easing: "ease-out" }}
      spinTiming={{ duration: 2000, easing: "ease-out" }}
      opacityTiming={{ duration: 350, easing: "ease-out" }}
    ></NumberFlow>
  );
};

export default TurningNumberFlow;
