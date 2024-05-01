import React from "react";
import {Wrapper} from "~/components/widgets/Misc/MiscWidget.styles";

type PropTypes = {
    heading?: string,
    dataValue?: string,
    dataType?: string
};

const MiscWidget: React.FC<PropTypes> = (props) => {
  const { heading, dataValue, dataType } = props;

  return (
    <Wrapper>
      <p>{heading}</p>
      <h1>{dataValue}</h1>
      <p>{dataType}</p>
    </Wrapper>
  );
};

export default MiscWidget;
