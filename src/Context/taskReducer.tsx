import { ACTION } from "./actions";
import { Task } from "./task";


// actions
type TaskAction =
    | { type: ACTION.ADD_NEW_TASK, payload: Task }



export interface TaskState {
    tasks : Task [];
}

export const initState: TaskState = {
    tasks : [],
} 

export const taskReducer = (state: TaskState = initState, action : TaskAction) => {


    switch (action.type) {
        
        case ACTION.ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]

            }
        default:
            return state
    }

}