import {Task} from "~/types/model.type";
import {db} from "~/db.server";

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
        return db.data?.find((item: Task) => item.id === id)
    } catch (error) {
        throw error;
    }
}