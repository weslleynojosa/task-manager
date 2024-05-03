import Activity from "~/components/icons/Activity";
import {
  IconWrapper,
  UserInfoWrapper,
  Wrapper,
  H1,
  Title,
  Container,
} from "~/components/icons/user/User.styles";
import { black } from "~/theme/colors";

const User = () => {
  return (
    <Container>
      <Wrapper>
        <IconWrapper>
          <Activity fill={black} />
        </IconWrapper>
        <UserInfoWrapper>
          <H1>{`Alex Azubi`}</H1>
          <Title>{`Taskmanager`}</Title>
        </UserInfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default User;
