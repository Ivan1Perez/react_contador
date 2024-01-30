import React from 'react'
import { useState } from 'react'

const useTarea = (initialTareas) => {

  const [tareas, setTareas] = useState(initialTareas);

  const addTarea = (newTarea) => {
    newTarea.id = Date.now();

    setTareas([...tareas, newTarea]);
  }

  const removeTarea = (tareaId) => {
    setTareas(tareas.filter(tarea => tarea.id !== tareaId));
  }

  return [tareas, addTarea, removeTarea]
}

export default useTarea