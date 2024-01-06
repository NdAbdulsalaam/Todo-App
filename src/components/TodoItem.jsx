import styles from '@/styles/TodoItem.module.css';
import { useRef, useState } from 'react';
import { VscTrash } from "react-icons/vsc";
import { AiFillEdit } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const TodoItem = ({ ItemProps, handleChange, delTodo, editTodo }) => {
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

    const [edit, setEdit] = useState(false);
    // const [edited, setEdited] = useState(ItemProps.title)
    const editInputRef = useRef(null);

    const editMode = {};
    const viewMode = {};

    if (edit) {
        viewMode.display = 'none'
    } else {
        editMode.display = 'none'
    }

    const handleEdit = () => {
        setEdit(true);
    }

    const handleEditDone = () => {
        // editTodo(edited, ItemProps.id)
        editTodo(editInputRef.current.value, ItemProps.id)
        setEdit(false);
    }
    const handleEdited= (e) => {
        return setEdited(e.target.value)
    }

    const handleEditedDone = (event) => {
        if (event.key === 'Enter') {
            // editTodo(edited, ItemProps.id)
            editTodo(editInputRef.current.value, ItemProps.id)
            setEdit(false);
        }
    }

    return(
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
                <input type="checkbox" checked={ItemProps.completed}
                onChange={() =>handleChange(ItemProps.id)} />
                 <span style={ItemProps.completed ? completedStyle : null}>
                    {ItemProps.title}
                </span>

                <button onClick={handleEdit} className='edit'>< AiFillEdit /></button>
                <button onClick={() => delTodo(ItemProps.id)} className='delete'><VscTrash /></button>
            </div>
            <div style={editMode}>
                <input type='text'  className={styles.textInput}
                // onChange={handleEdited} value={edited}
                ref={editInputRef}
                defaultValue={ItemProps.title}
                onKeyDown={handleEditedDone} />
                
                <button onClick={handleEditDone} className='done'>< IoMdCheckmarkCircleOutline /></button>
            </div>
        </li>
    );
};

export default TodoItem;