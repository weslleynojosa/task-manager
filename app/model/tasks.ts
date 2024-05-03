import {format} from "date-fns";
import { Task } from "~/types/model.type";
import { db } from "~/db.server";

export const getTasks = (): Task[] => {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = db.data;

    if (!tasks?.length) {
      return [];
    }

    return tasks;
  } catch (error) {
    throw error;
  }
};

export const getTask = (id: number) => {
  // eslint-disable-next-line no-useless-catch
  try {
    return db.data?.find((item: Task) => item.id === id);
  } catch (error) {
    throw error;
  }
};

export const updateTaskStatus = (id: number, status: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = db.data;
    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd HH:mm:ss")

    if (tasks) {
      const findIndex = tasks?.findIndex((task) => task.id === id);
      tasks[findIndex] = {
        ...tasks[findIndex],
        status: status,
        dateUpdated: formattedDate
      };
      db.write();
      return getNewTask(id);
    }
  } catch (error) {
    throw error;
  }
};

export const getNewTask = (id: number) => {
  // eslint-disable-next-line no-useless-catch
  const taskArr = db.data;
  try {
    const filteredTasks = taskArr?.filter(
      (task) => task.status === "New" && task.id > id
    );
    if (filteredTasks) {
      return filteredTasks[0];
    } else {
      return undefined;
    }
  } catch (error) {
    throw error;
  }
};
