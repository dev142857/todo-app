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
export interface updateTaskProps {
    showModal: boolean
    setShowModal: Function
    taskId: string
    taskName: string
    setTaskList: Function
}