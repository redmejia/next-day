import { createContext, useReducer } from "react";
import { Task } from "./task";
import { initState, taskReducer } from "./taskReducer";
import { ACTION } from "./actions";

export interface TaskContextProps {
    mytask: Task[],
    addNewTask: (newTask: Task) => void;
}

export const TaskContext = createContext({} as TaskContextProps);

export const TaskProvider = ({ children }: any) => {


    const [tasks, dispatch] = useReducer(taskReducer, initState)


    const addNewTask = (newTask: Task) => {
        
        dispatch({ type: ACTION.ADD_NEW_TASK, payload: newTask })
    }

    return (
        <TaskContext.Provider value={{
            mytask: tasks.tasks,
            addNewTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}