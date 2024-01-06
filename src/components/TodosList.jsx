import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps, handleChange, delTodo, editTodo }) => {
    return(
        <ul>
            {
                todosProps.map((todo) => (
                <TodoItem key={todo.id} ItemProps={todo} handleChange={handleChange}
                delTodo={delTodo} editTodo={editTodo} />
                ))
            }
        </ul>
    );
};

export default TodosList;