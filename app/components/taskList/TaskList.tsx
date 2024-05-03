import {
    Header,
    Inner,
    List,
    P,
} from "./TaskList.styles";
import { Task } from "~/types/model.type";
import TaskListItem from "~/components/taskListItem/TaskListItem";
import React from "react";

type PropTypes = {
    tasks: Task[];
};

const TaskList: React.FC<PropTypes> = (props) => {
    const { tasks } = props;

    return (
        <>
            <Header>
                <Inner>
                    <P className={"id-number"}>ID</P>
                    <P>Insurance Number</P>
                    <P className={"name"}>Name</P>
                </Inner>
                <p>Status</p>
            </Header>
            <List>
                {tasks.map((task: Task, index: number) => {
                    return <TaskListItem key={index} item={task} />;
                })}
            </List>
        </>
    );
};

export default TaskList;
