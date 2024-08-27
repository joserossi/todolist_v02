import { useEffect, useState } from 'react'
import { InputCard } from './InputCard'
import { TaskCardV2 } from './TaskCardV2'

import './App.css'

function App() {

  const [tasks, setTask] = useState([])

  useEffect(() => {
    storedTaskOnLS()
  }, [])

  const storedTaskOnLS = () => {
    const jsonData = localStorage.getItem('jsonData')
    if (jsonData) {
      const storedTask = JSON.parse(jsonData)
      setTask(storedTask)
    }
  }

  // Función de callback para actualizar el estado cuando el hijo guarde en localStorage
  const handleDataUpdate = () => {
    storedTaskOnLS() 
  }


  return (
    <div className="container">
      <h1>toDo List</h1>
      <InputCard 
        onSave= {handleDataUpdate} 
      />


      {
        tasks.map(task_unit => {
          const { task, isDone } = task_unit
          return (
            <>
             <TaskCardV2
              key = {task.id}
              task = {task}
              isDone = {isDone}
              />
            </>
          )
        })
      }
    </div>
  )
}

export default App
