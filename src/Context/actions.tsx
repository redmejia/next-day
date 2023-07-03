export enum ACTION {
    ADD_NEW_TASK = 'ADD_NEW_TASK',
    ADD_TO_ON_PROGRESS = 'ADD_TO_ON_PROGRESS',
    MARK_AS_COMPLETED = 'MARK_AS_COMPLETED',
    RESET_TASK = 'RESET_TASK', // reset header state no task set to  task {}
    DELETE_TASK = 'DELETE_TASK', // Delete task if is complete or delete from my task list
    DELETE_COMPLETED_TASK = 'DELETE_COMPLETED_TASK',
}