import React from 'react'
import useTarea from '../hooks/useTarea';

const initialTareas = [
  {id: 1, title: 'Learn React'},
  {id: 2, title: 'Learn Node.js'}
];

const TareasApp = () => {

  const [tareas, addTarea, removeTarea] = useTarea(initialTareas);

  return (
    <>
      <h1>TareasApp</h1>

      <div>
        <label>Añadir tarea:</label>
        <button onClick={() => addTarea({title:'Nueva Tarea'})}>Añadir tarea</button>
      </div>
      <ul>
        {/* {
          tareas && tareas.map((tarea, index) => 
            <li key={index}>{tarea}</li>
          )
        } */}
        {
          initialTareas.map(tarea => (
            <li key={tarea.id}>
              {tarea.title}
              <button onClick={() => removeTarea(tarea.id)}>
                Borrar
              </button>  
            </li>
          ))
        }
        <li>
          <button onClick={() => removeTarea}>
            Borrar
          </button>
        </li>
      </ul>
    </>
  )
}

export default TareasApp