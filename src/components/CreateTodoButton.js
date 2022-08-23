import React from 'react';
import '../style/CreateTodoButton.css';
import { TodoContext } from './TodoContext';
import { AiFillRocket } from 'react-icons/ai';

function CreateTodoButton() {

  const { openModal, setOpenModal } = React.useContext(TodoContext)
  const onClickButton = () => {
    setOpenModal(!openModal);


  };


  return (

    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      <AiFillRocket />
    </button>
  );
}

export { CreateTodoButton };