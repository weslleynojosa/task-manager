import { json, LoaderFunction } from "@remix-run/node";
import { getTask } from "~/model/tasks";
import { useLoaderData } from "@remix-run/react";
import { Task } from "~/types/model.type";
import {
  ProfileData,
  Section,
  StyledForm,
  WidgetWrapper,
} from "~/components/taskWrapper/TaskWrapper.styles";
import React from "react";
import Input from "~/components/input/Input";
import ProfileFilled from "~/components/icons/ProfileFilled";
import MiscWidget from "~/components/widgets/Misc/MiscWidget";
import styled from "@emotion/styled";

export const loader: LoaderFunction = ({ params }) => {
  const taskId: number = Number(params.id);

  return json(getTask(taskId));
};

export const Modules = styled.div`
  padding: 1.6rem;
`

const TaskId = () => {
  const data: Task = useLoaderData<typeof loader>();
  return (
    <>
      <Modules>
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
                value={data.birthdate ? data.birthdate : data.ocrBirthdate}
            />
            <Input label={"VP-Nr"} value={"01"} disabled />
          </Section>
          <Section>
            <Input label={"Telephone Number"} value={data.phone} disabled />
          </Section>
          <Input label={"Address"} value={data.address} disabled />
        </StyledForm>
        <WidgetWrapper>
          <MiscWidget
              heading={"Fee regulation"}
              dataValue={`3/4`}
              dataType={"Tasks completed"}
          />
          <MiscWidget
              heading={"Tariff regulation"}
              dataValue={`0/2`}
              dataType={"Tasks completed"}
          />
          <MiscWidget
              heading={"This task brings you and your team"}
              dataValue={`15`}
              dataType={"Scorepoints"}
          />
          <MiscWidget heading={"Skilllevel"} dataValue={`Basis`} />
        </WidgetWrapper>
      </Modules>

      <p>{data.status}</p>
    </>
  );
};

export default TaskId;
