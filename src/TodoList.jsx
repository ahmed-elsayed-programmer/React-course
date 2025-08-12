import React, { useState } from 'react'
import Task from './Task';

import './todo-list.css'

const TodoList = () => {

    const [tasks, setTasks] = useState([
        { text: 'create project', done: true },
        { text: "task 2", done: false }
    ]);

    const [text, setText] = useState("");

    const addTask = () => {

        let newTasks = [...tasks, { text: text, done: false }]

        setTasks(newTasks)
    }

    const updateText = (e) => {
        let newValue = e.target.value

        setText(newValue)

    }

    return (
        <div className='todo-container'>
            <div className='input-group '>
                <input className='input' value={text} onChange={updateText} type="text" />
                <button className='button' onClick={addTask}>Create Task</button>
            </div>

            <ul>
                {tasks.map((task, index) => <Task key={index} text={task.text} done={task.done} />)}
            </ul>
        </div>
    )
}

export default TodoList