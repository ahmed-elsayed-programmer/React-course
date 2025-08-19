import React, { useEffect, useState } from 'react'
import Task from './Task';

import './todo-list.css'

/*
        { id: 1, title: 'create project', desc: "", done: true },
        { id: 2, title: "task 2", desc: "", done: false }
   
*/

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {

        document.querySelector('title').innerText = "task manager"

        setTasks([
            { id: 1, title: 'create project', desc: "", done: true },
            { id: 2, title: "task 2", desc: "", done: false }
        ])

    }, [])


    useEffect(() => {
        console.log("new Tasks list is ")
        console.log(tasks)


    }, [tasks, desc])



    const addTask = () => {

        if (!text || !desc) return

        let newTasks = [...tasks,
        {
            id: tasks.length + 1, // uuid
            title: text,
            desc: desc,
            done: false
        }]

        setTasks(newTasks)
        setDesc("")
        setText("")
    }

    const toggleDone = (id) => {
        const newTasks = tasks.map((t) => {
            if (t.id === id) {
                return { ...t, done: !t.done }
            }

            return t
        })

        setTasks(newTasks)
    }

    const updateText = (e) => {
        let newValue = e.target.value

        setText(newValue)

    }

    const updateDesc = (e) => {
        let newValue = e.target.value

        setDesc(newValue)

    }

    return (
        <div className='todo-container'>
            <div>
                <h3>
                    “You have {tasks.length} tasks, {tasks.filter((task) => task.done == true).length} completed”
                </h3>
            </div>
            <div className='input-group '>
                <input className='input' placeholder='title' value={text} onChange={updateText} type="text" />
            </div>
            <div className="input-group">

                <input type="text" placeholder='description' className='input' value={desc} onChange={updateDesc} />
            </div>
            <button className='button' onClick={addTask}>Create Task</button>

            <ul>
                {tasks.map((task, index) => <Task key={index} text={task.title} id={task.id} done={task.done} toggleDone={toggleDone} />)}
            </ul>
        </div>
    )
}

export default TodoList