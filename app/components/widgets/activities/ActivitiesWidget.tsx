import styled from "@emotion/styled";
import React from "react";
import ProgressCircle, {
  CircleProps,
  TextProps,
} from "~/components/progressCircle/ProgressCircle";
import { blue } from "~/theme/colors";
import { Wrapper } from "~/theme/global.styles";

export type PropTypes = {
  counters?: {
    totalTasks?: number;
    completedTasks?: number;
    completedTasksLastHour?: number;
  };
};

export const ActivitiesWrapper = styled(Wrapper)`
  min-width: 20rem;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Note = styled.span`
  font-size: 1.4rem;
`;

const ActivitiesWidget: React.FC<PropTypes> = (props) => {
  const { counters } = props;

  const progress =
    counters?.completedTasks && counters?.totalTasks
      ? (counters?.completedTasks * 100) / counters?.totalTasks
      : 0;
  const goal =
    counters?.completedTasks && counters?.totalTasks
      ? counters?.totalTasks - counters?.completedTasks
      : 0;
  const displayText: TextProps = {
    percentage: counters?.completedTasksLastHour
      ? counters?.completedTasksLastHour
      : 0,
    auxText: "Your score points",
  };

  const circle: CircleProps = {
    color: blue,
    pct: progress,
  };

  return (
    <ActivitiesWrapper>
      <ProgressCircle circle={circle} displayText={displayText} />
      <Note>{`${goal} more to the daily goal`}</Note>
    </ActivitiesWrapper>
  );
};

export default ActivitiesWidget;
