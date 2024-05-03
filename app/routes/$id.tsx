import React from "react";
import { json, LoaderFunction } from "@remix-run/node";
import TaskItem, { action } from "~/routes/taskItem";
import { getTask } from "~/model/tasks";
import { useLoaderData } from "@remix-run/react";

import { Task } from "~/types/model.type";

export const loader: LoaderFunction = ({ params }) => {
  const taskId: number = Number(params.id);
  return json(getTask(taskId));
};

export { action };

const TaskId = () => {
  const data: Task = useLoaderData<typeof loader>();
  return <TaskItem key={data.id} data={data} />;
};

export default TaskId;
