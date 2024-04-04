import React, { useEffect, useRef, useState } from 'react'
import { addTaskProps } from './Types/general.interface'
const AddTask = ({ task, taskList, setTask, setTaskList }: addTaskProps) => {

    const addTaskInput = useRef<HTMLInputElement>(null)
    useEffect(() => {
        addTaskInput.current?.focus()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        if(task !== "") {
            e.preventDefault()
            setTask("")
            const dateTime = time()
            setTaskList((): {} => {
                return [
                    ...taskList, 
                    {id: crypto.randomUUID(), name: task, time: dateTime, completed: false}
                ]
            })
        }
        else {
            e.preventDefault()
        }
    }

    const time = () => {
        const date = new Date()
        const dateTime: string = +date.getHours() + ":" 
            + date.getMinutes() + " "
            + date.getDate() + "/"
            + date.getMonth() + "/"
            + date.getFullYear()
        return dateTime

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' className='form-control taskInput' ref={addTaskInput} onChange={(e) => {setTask(e.target.value)}} />
                <input type='submit' className='btn btn-primary submitBtn' />
            </form>
        </>
    )
}

export default AddTask