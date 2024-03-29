import React from 'react';
import "../App.css"

function TodoList(props) {
    const { item, completeTodo, removeTodo } = props;

    return (
        <li className="list-group-item mt-3" key={item.id}>
            {
                item.completed === false ? <h1 className="text-green">{item.item}</h1> : <h1 className="delete text-green">{item.item}</h1>
            }
            {
                item.completed === false &&
                <button className=" btn btn-success btn-sm mx-2" onClick={() => completeTodo(item.id)}>Complete</button>
            }

            <button className=" btn btn-danger btn-sm  mx-2"  onClick={() => removeTodo(item.id)}>Remove</button>

            {item.completed && <button className="btn btn-warning btn-sm  mx-2">completed</button>}
        </li>
    )
}

export default TodoList
