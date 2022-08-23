import React from "react";
import { TodoContext } from "./TodoContext";
import '../style/TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);

    };
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe Tu nueva Tarea</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Hacer una inteligencia Artificial"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                    type="button"
                >
                    cancelar
                </button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--cancel">

                    añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };