import styled from "@emotion/styled";
import Work from "~/components/icons/Work";
import {Wrapper} from "~/theme/global.styles";

export const WeatherWrapper = styled(Wrapper)``

const WeatherWidget = () => {
    return (
        <WeatherWrapper>
            <Work />
        </WeatherWrapper>
    )

}

export default WeatherWidget;