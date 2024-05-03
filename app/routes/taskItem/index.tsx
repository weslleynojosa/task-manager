import { ActionFunction, ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import React from "react";
import Button from "~/components/button/Button";
import Activity from "~/components/icons/Activity";
import Input from "~/components/input/Input";
import ProfileCard from "~/components/profileCard/ProfileCard";
import {
  ButtonArea,
  Header,
  Hint,
  InnerAction,
  Modules,
  Note,
  NoteForm,
  StyledLink,
  StyledWrapper,
  SubTitle,
  Title,
  TitleInfo,
  WidgetWrapper,
} from "~/routes/taskItem/TaskItem.styles";
import MiscWidget from "~/components/widgets/misc/MiscWidget";
import { getNewTask, updateTaskStatus } from "~/model/tasks";
import { darkBlue } from "~/theme/colors";
import { TaskDetails } from "~/types/model.type";

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);
  const { id } = values;
  let result;
  if (_action === "finish") {
    result = updateTaskStatus(Number(id), "Done");
  }
  if (_action === "skip") {
    result = getNewTask(Number(id));
  }
  if (_action === "escalate") {
    result = updateTaskStatus(Number(id), "Escalated");
  }

  return result ? redirect(`/${result?.id}`) : redirect(`/`);
};

const TaskItem = ({ data }: TaskDetails) => {
  return (
    <>
      <Header>
        <Title>
          <TitleInfo>
            <Activity fill={darkBlue} />
            <p>{`Please check patient's age`}</p>
          </TitleInfo>
          <StyledLink to={"/"}>Back to task list</StyledLink>
        </Title>
        <Hint>{`Rule 334: The GOZ 2000 can only be billed from ages 7 to 18. For insured persons under the age of 6, only billable if the 6-year molar erupts prematurely.`}</Hint>
      </Header>
      <Modules>
        <StyledWrapper>
          <InnerAction>
            <SubTitle>Excerpt from the patient file</SubTitle>
            <Button>{`to the contract >`}</Button>
          </InnerAction>
          <ProfileCard data={data} />
        </StyledWrapper>
        <Note>
          <SubTitle>Excerpt from the patient file</SubTitle>
          <NoteForm>
            <Input
              secondary
              placeholder={"Add missing information"}
              className={"box"}
            />
            <Button primary>Save</Button>
          </NoteForm>
        </Note>
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
          <MiscWidget heading={"Skill level"} dataValue={`Basis`} />
        </WidgetWrapper>
        <InnerAction>
          <ButtonArea>
            <Form method={"post"}>
              <input type={"hidden"} name={"id"} value={data.id} />
              <Button secondary type={"submit"} name={"_action"} value={"skip"}>
                Skip
              </Button>
            </Form>
            <Form method={"post"}>
              <input type={"hidden"} name={"id"} value={data.id} />
              <Button
                primary
                type={"submit"}
                name={"_action"}
                value={"escalate"}
                disabled={data.status === "Done"}
              >
                Escalate
              </Button>
            </Form>
          </ButtonArea>
          <Form method={"post"}>
            <input type={"hidden"} name={"id"} value={data.id} />
            <Button primary type={"submit"} name={"_action"} value={"finish"}>
              Validate
            </Button>
          </Form>
        </InnerAction>
      </Modules>
    </>
  );
};

export default TaskItem;
