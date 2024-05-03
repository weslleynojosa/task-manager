import React from "react";
import {blue, lightGrey} from "~/theme/colors";

export type CircleProps = {
  color: string;
  pct?: number;
};

export type TextProps = {
  percentage: number;
  auxText?: string;
};

type ProgressCircleProps = {
    circle: CircleProps;
    displayText: TextProps;
}
const currentPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle: React.FC<CircleProps> = ({ color, pct }) => {
  const r = 60;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct!) * circ) / 100;
  return (
    <circle
      r={r}
      cx={75}
      cy={75}
      fill={"transparent"}
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
    ></circle>
  );
};

const Text: React.FC<TextProps> = (props) => {
  return (
    <>
      <text
        x={"50%"}
        y={"45%"}
        dominantBaseline={"central"}
        textAnchor={"middle"}
        fontSize={"4rem"}
        fill={blue}
        fontWeight={600}
      >
        {props.percentage}
      </text>
      <text
        x={"50%"}
        y={"65%"}
        dominantBaseline={"central"}
        textAnchor={"middle"}
        fontSize={"1rem"}
      >
        {props.auxText}
      </text>
    </>
  );
};

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  circle,
  displayText,
}) => {
  const percentage = currentPercentage(circle.pct!);
  return (
    <svg width={150} height={150}>
      <g transform={`rotate(-90 ${"75 75"})`}>
        <Circle color={lightGrey} />
        <Circle color={circle.color} pct={percentage} />
      </g>
      <Text percentage={displayText.percentage} auxText={displayText.auxText} />
    </svg>
  );
};

export default ProgressCircle;
