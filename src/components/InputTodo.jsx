import { useState } from "react";
import {MdAddTask} from 'react-icons/md'

const InputTodo = ({ addNewTodo }) => {

        const [todo, setTodo] = useState('')
        const [message, setMessage] = useState('')

        const handleChange = (e) => {
            setTodo(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (todo.trim()) {
                addNewTodo(todo);
                setTodo('');
                setMessage('');
            } else {
                setMessage('Please add item');
            }
        }

    return(
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" value={todo} placeholder="Add Todo..."
                onChange={handleChange} className="input-text" />

                <button className="input-submit"><MdAddTask /></button>
            </form>
            <span className="submit-warning">{message}</span>
        </>
    );
}

export default InputTodo;