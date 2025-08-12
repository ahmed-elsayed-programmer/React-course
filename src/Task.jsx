import React from 'react'

const Task = (props) => {
    const { text, done } = props
    return (
        <li>
            <span>{text}</span>

            {done ? <button>Delete</button> : <button>Done</button>}
        </li>
    )
}

export default Task