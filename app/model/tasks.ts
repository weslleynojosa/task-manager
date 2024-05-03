import { differenceInHours, format } from "date-fns";
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

export const getTaskCount = async () => {
  const tasks = db.data;
  const completedTasks = tasks?.filter((task) => task.status === "Done");

  const completedTasksLastHour = completedTasks?.filter((task) => {
    if (task.dateUpdated) {
      return differenceInHours(new Date(), new Date(task.dateUpdated)) <= 1;
    }
  });

  return {
    totalTasks: tasks?.length,
    completedTasks: completedTasks?.length,
    completedTasksLastHour: completedTasksLastHour?.length,
  };
};

export const updateTaskStatus = (id: number, status: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const tasks = db.data;
    const currentDate = new Date();
    const formattedDate = format(currentDate, "yyyy-MM-dd HH:mm:ss");

    if (tasks) {
      const findIndex = tasks?.findIndex((task) => task.id === id);
      tasks[findIndex] = {
        ...tasks[findIndex],
        status: status,
        dateUpdated: formattedDate,
      };
      db.write();
      return getNewTask(id);
    }
  } catch (error) {
    throw error;
  }
};

export const getNewTask = (id: number) => {
  const taskArr = db.data;
  // eslint-disable-next-line no-useless-catch
  try {
    const filteredTasks = taskArr?.filter(
      (task) => task.status === "New" && task.id > id
    );
    if (filteredTasks && filteredTasks.length > 0) {
      return filteredTasks[0];
    } else {
      const newTasks = taskArr?.filter((task) => task.status === "New");

      return newTasks && newTasks?.length > 0 ? newTasks[0] : undefined;
    }
  } catch (error) {
    throw error;
  }
};
