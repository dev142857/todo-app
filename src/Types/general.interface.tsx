export interface taskProperties {
    id: string
    name: string
    time: string
    completed: boolean
}
export interface addTaskProps {
    task: string
    taskList: taskProperties[]
    setTask: Function
    setTaskList: Function
}
export interface displayTaskProps {
    taskList: taskProperties[]
    setTaskList: Function
}