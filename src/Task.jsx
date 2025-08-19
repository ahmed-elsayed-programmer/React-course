import React, { useState } from 'react'

const Task = (props) => {
    const { text, id, toggleDone, done } = props;


    return (
        <li>
            <span>{text}</span>

            <button onClick={() => toggleDone(id)}>{done ? "Delete" : "Done"} </button>
        </li>
    )
}

export default Task