import Activity from "~/components/icons/Activity";
import Card from "~/components/icons/Card";
import Health from "~/components/icons/Health";
import Invoice from "~/components/icons/Invoice";
import Work from "~/components/icons/Work";
import {
  Actions,
  Container,
  IconButton,
  Navigation,
} from "~/components/navbar/NavBar.styles";
import { white } from "~/theme/colors";

const NavBar = () => {
  return (
    <Container>
      <Actions>{`ZS`}</Actions>
      <Navigation>
        <IconButton>
          <Activity fill={white} />
        </IconButton>
        <IconButton>
          <Work />
        </IconButton>
        <IconButton>
          <Invoice />
        </IconButton>
        <IconButton>
          <Card />
        </IconButton>
        <IconButton>
          <Health />
        </IconButton>
      </Navigation>
    </Container>
  );
};

export default NavBar;
