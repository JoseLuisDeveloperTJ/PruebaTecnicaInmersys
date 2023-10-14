import React from 'react';
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TaskItem({ task, onComplete, onDelete, isCompleted }) {
  const notify = () => {
    console.log('Notificación mostrada'); 
    toast('¡Tarea completada!');
  };

  function handleClick(){
    notify();
    onComplete();
  }
  
  return (
    <li className='cardContainer flex flex-row justify-between'>
      <div className={isCompleted ? 'circle completed' : 'circle'}></div>
      <span>{task}</span>
      {!isCompleted && (
        <div className='button-container'>
          <button onClick={handleClick} className='custom-button'>Completar</button>
          <button onClick={onDelete} className='delete-button'>Eliminar</button>
        </div>
      )}
    </li>
  );
}

export default TaskItem;