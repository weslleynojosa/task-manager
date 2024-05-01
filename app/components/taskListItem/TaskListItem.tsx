import React from "react";
import { Task } from "~/types/model.type";
import { Link } from "@remix-run/react";
import {Inner, P, Wrapper} from "~/components/taskListItem/TaskListItem.styles";

type PropTypes = {
  item: Task;
};

const TaskListItem: React.FC<PropTypes> = (props) => {
  const { item } = props;

  return (
    <>
      <Link to={`${item.id}`}>
        <Wrapper>
          <Inner>
            <P className={'id-number'}>{item.id}</P>
            <P>{item.contractNumber}</P>
            <P className={'name'}>{item.name}</P>
          </Inner>
          <p>{item.status}</p>
        </Wrapper>
      </Link>
    </>
  );
};

export default TaskListItem;
