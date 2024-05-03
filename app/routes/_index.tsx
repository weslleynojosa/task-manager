import {json, LoaderFunction} from "@remix-run/node";
import TaskList from "~/components/taskList/TaskList";
import {getTasks} from "~/model/tasks";
import {useLoaderData} from "@remix-run/react";

export const loader: LoaderFunction = async () => {
    const taskList = getTasks();

    return json({
        tasks: taskList,
    });
};

export default function _index() {
    const { tasks } = useLoaderData<typeof loader>();
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}
