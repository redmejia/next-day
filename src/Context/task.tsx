export interface Task  {
    tskID?: number,
    title: string,
    description: string,
    levelColor: string,
}
// this is function generate id for testing  
export const genRandomId = (maxId: number = 1000): number => {
   return Math.floor(Math.random() * maxId)
}