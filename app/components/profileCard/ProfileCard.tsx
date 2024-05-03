import ProfileFilled from "~/components/icons/ProfileFilled";
import Input from "~/components/input/Input";
import React from "react";
import {ProfileData, Section, StyledForm} from "~/components/profileCard/ProfileCard.styles";
import {TaskDetails} from "~/types/model.type";

const ProfileCard = ({ data } : TaskDetails) => {
  return (
    <StyledForm>
      <Section>
        <ProfileData>
          <ProfileFilled />
          <Input
            label={"Insured Person"}
            defaultValue={data.name}
            disabled
            isTitle
          />
        </ProfileData>
        <Input
          label={"Insurance number"}
          defaultValue={data.contractNumber}
          disabled
        />
      </Section>
      <Section>
        <Input label={"Gender"} value={data.sex} disabled />
        <Input
          label={"Birthdate"}
          defaultValue={data.birthdate ? data.birthdate : data.ocrBirthdate}
        />
        <Input label={"VP-Nr"} defaultValue={"01"} disabled />
      </Section>
      <Section>
        <Input label={"Telephone Number"} defaultValue={data.phone} disabled />
      </Section>
      <Input label={"Address"} defaultValue={data.address} disabled />
    </StyledForm>
  );
};

export default ProfileCard;