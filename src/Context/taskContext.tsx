import { createContext, useReducer } from "react";
import { Task } from "./task";
import { initState, taskReducer } from "./taskReducer";
import { ACTION } from "./actions";

export interface TaskContextProps {
    mytask: Task[];
    onProgress: Task;
    completedTask: Task[];

    addNewTask: (newTask: Task) => void;
    addToProgres: (newTask: Task) => void;
    markAsComplete: (completedTask: Task) => void;
    resetTask: () => void; // eset header to init state
    deleteTask: (taskId: number) => void; // delete  header to init state
}

export const TaskContext = createContext({} as TaskContextProps);

export const TaskProvider = ({ children }: any) => {


    const [tasks, dispatch] = useReducer(taskReducer, initState)


    const addNewTask = (newTask: Task) => {

        dispatch({ type: ACTION.ADD_NEW_TASK, payload: newTask })
    }

    const addToProgres = (newTask: Task) => {
        dispatch({ type: ACTION.ADD_TO_ON_PROGRESS, payload: newTask })
    }

    const markAsComplete = (completedTask: Task) => {
        dispatch({ type: ACTION.MARK_AS_COMPLETED, payload: completedTask })
    }

    const resetTask = () => {
        dispatch({ type: ACTION.RESET_TASK, payload: { title: '', description: '', levelColor: '', tskID: 0 } })
    }

    const deleteTask = (taskId : number) => {
        dispatch({ type : ACTION.DELETE_TASK, taskID : taskId})
    }

    return (
        <TaskContext.Provider value={{
            mytask: tasks.tasks,
            onProgress: tasks.onProgress,
            completedTask: tasks.completed,
            addNewTask,
            addToProgres,
            markAsComplete,
            resetTask,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}