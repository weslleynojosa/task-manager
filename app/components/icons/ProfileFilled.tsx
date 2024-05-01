import styled from "@emotion/styled";
import { lightBlue } from "~/theme/colors";
import Profile from "~/components/icons/Profile";

export const Container = styled.div`
  display: flex;
  background: ${lightBlue};
  padding: 1rem;
  border-radius: 0.8rem;
  margin: 1.7rem 1.7rem 1.7rem 0;
`;

const ProfileFilled = () => {
  return (
    <Container>
      <Profile />
    </Container>
  );
};

export default ProfileFilled;
