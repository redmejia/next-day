import { ACTION } from "./actions";
import { Task } from "./task";


// actions
type TaskAction =
    | { type: ACTION.ADD_NEW_TASK, payload: Task }
    | { type: ACTION.ADD_TO_ON_PROGRESS, payload: Task }
    | { type: ACTION.MARK_AS_COMPLETED, payload: Task }



export interface TaskState {
    onProgress: Task;
    tasks: Task[];
    completed: Task[];
}

export const initState: TaskState = {
    tasks: [],
    onProgress: {
        title: "",
        description: "",
        levelColor: ""
    },
    completed : []
}

export const taskReducer = (state: TaskState = initState, action: TaskAction) => {


    switch (action.type) {

        case ACTION.ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        case ACTION.ADD_TO_ON_PROGRESS:
            return {
                ...state,
                onProgress: action.payload
            }
        case ACTION.MARK_AS_COMPLETED: 
            return {
                ...state,
                completed : [...state.completed, action.payload]
            }
        default:
            return state
    }

}