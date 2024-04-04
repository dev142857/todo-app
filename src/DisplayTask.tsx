import { useEffect, useState } from 'react'
import { displayTaskProps, taskProperties } from './Types/general.interface'
import UpdateTask from './UpdateTask'

const DisplayTask = ({ taskList, setTaskList }: displayTaskProps) => {
    const [taskFilter, setTaskFilter] = useState('all')
    const [filteredTasks, setFilteredTasks] = useState([...taskList])
    const [showModal, setShowModal] = useState(false);
    const [taskId, setTaskId] = useState('');
    const [taskName, setTaskName] = useState('');
    const onClickButtonStyle = {
        backgroundColor: "#0a5fdf",
        color: "white"
    }
    useEffect(() => {
        filterTaskDisplay()
    }, [taskList, taskFilter])
    const toggleTask = (id: string, completed: boolean) => {
        setTaskList((currentTaskList: taskProperties[]) => {
            return currentTaskList.map((task: taskProperties) => {
                if (task.id === id) {
                    return {
                        ...task, completed: completed
                    }
                }
                return task
            })
        })
    }

    const filterTaskDisplay = () => {
        switch (taskFilter) {
            case "all":
                setFilteredTasks([...taskList])
                break;
            case "pending":
                setFilteredTasks(taskList.filter((task: taskProperties) => !task.completed))
                break;
            case "completed":
                setFilteredTasks(taskList.filter((task: taskProperties) => task.completed))
                break;
            default:
                setFilteredTasks([...taskList])
        }
    }

    const delTaskList = (id: string) => {
        setTaskList(taskList.filter((task: taskProperties) => task.id !== id))
    }

    return (
        <div className='taskBoard'>
            <div className='boardTop'>
                <div className='buttonsGroup'>
                    <button className='btn btn-outline-primary' onClick={() => setTaskFilter('all')} style={taskFilter === "all" ? onClickButtonStyle : undefined}>All</button>
                    <button className='btn btn-outline-primary' onClick={() => setTaskFilter('pending')} style={taskFilter === "pending" ? onClickButtonStyle : undefined}>Pending</button>
                    <button className='btn btn-outline-primary' onClick={() => setTaskFilter('completed')} style={taskFilter === "completed" ? onClickButtonStyle : undefined}>Completed</button>
                </div>
            </div>
            <div className='taskList'>
                {filteredTasks && filteredTasks.map((task: taskProperties) => (
                    <div className='task' key={task.id}>
                        <input className="form-check-input checkBox" type="checkbox" checked={task.completed} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { toggleTask(task.id, e.target.checked) }} />
                        <div>
                            <div className={`taskName ${task.completed ? 'taskStrike' : ''}`}>{task.name}</div>
                        </div>
                        <div className="taskActions">
                            <button className="btn btn-dark editButton" onClick={() => {
                                setShowModal(true)
                                setTaskName(task.name)
                                setTaskId(task.id)
                            }}>
                                Edit
                            </button>
                            <button className="btn btn-dark deleteButton" onClick={() => {
                                delTaskList(task.id)
                            }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <UpdateTask showModal={showModal} setShowModal={setShowModal} taskId={taskId} taskName={taskName} setTaskList={setTaskList} />
        </div>
    )
}

export default DisplayTask