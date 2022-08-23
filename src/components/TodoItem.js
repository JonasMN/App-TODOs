import React from 'react';
import '../style/TodoItem.css';
import { FiXCircle } from "react-icons/fi";
import { BsFillCheckSquareFill } from "react-icons/bs";


function TodoItem(props) {



  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}

      >
        <BsFillCheckSquareFill />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}

      >
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}


      >
        <FiXCircle />
      </span>
    </li>
  );
}

export { TodoItem };