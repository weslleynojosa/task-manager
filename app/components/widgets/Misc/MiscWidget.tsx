import React from "react";
import {StyledWrapper} from "~/components/widgets/Misc/MiscWidget.styles";

type PropTypes = {
    heading?: string,
    dataValue?: string,
    dataType?: string
};

const MiscWidget: React.FC<PropTypes> = (props) => {
  const { heading, dataValue, dataType } = props;

  return (
    <StyledWrapper>
      <p>{heading}</p>
      <h1>{dataValue}</h1>
      <p>{dataType}</p>
    </StyledWrapper>
  );
};

export default MiscWidget;
