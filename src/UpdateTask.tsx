import React from 'react'
import { useState } from 'react'
import { updateTaskProps, taskProperties } from './Types/general.interface'

const UpdateTask = ({ showModal, setShowModal, taskId, taskName, setTaskList }: updateTaskProps) => {
    const [newTaskName, setNewTaskName] = useState('');
    const updateTaskList = () => {
        setNewTaskName(taskName)
        setTaskList((currentTasks: taskProperties[]) => {
            return currentTasks.map((task: taskProperties) => {
                if (task.id === taskId){
                    return {...task, name: newTaskName}
                }
                return task
            })
        })
        setShowModal(false)
        setNewTaskName("")
    }
    return (
        <>
            {showModal && (
                <div className='modalOverlay'>
                    <div className='editModal'>
                        <div className='modalContent'>
                            <div className="modalTitle">Edit Task</div>
                            <label className="modalInputLabel" htmlFor="modalInput">Task title</label>
                            <input type='text' value={newTaskName} placeholder={taskName} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setNewTaskName(e.target.value)}} />
                            <div className='modalButtons'>
                                <button className='btn btn-primary' onClick={() => updateTaskList()}>Update Task</button>
                                <button className='btn btn-light' onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UpdateTask