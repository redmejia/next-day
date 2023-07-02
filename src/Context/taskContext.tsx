import { createContext, useReducer } from "react";
import { Task } from "./task";
import { initState, taskReducer } from "./taskReducer";
import { ACTION } from "./actions";

export interface TaskContextProps {
    mytask: Task[];
    onProgress : Task;

    addNewTask: (newTask: Task) => void;
    addToProgres : (newTask : Task) => void;
}

export const TaskContext = createContext({} as TaskContextProps);

export const TaskProvider = ({ children }: any) => {


    const [tasks, dispatch] = useReducer(taskReducer, initState)


    const addNewTask = (newTask: Task) => {
        
        dispatch({ type: ACTION.ADD_NEW_TASK, payload: newTask })
    }

    const addToProgres = (newTask: Task) => {
        dispatch({type: ACTION.ADD_TO_ON_PROGRESS, payload : newTask})
    }

    return (
        <TaskContext.Provider value={{
            mytask: tasks.tasks,
            onProgress: tasks.onProgress,
            addNewTask,
            addToProgres
        }}>
            {children}
        </TaskContext.Provider>
    )
}