import React, { useState } from 'react'

import Tasks from './components/Tasks'


import './App.css'
import AddTask from './components/AddTask'

const App = () => {
  // let message = 'Hello Nemoto'

  const [task, setTask] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar English',
      completed: true,
    },
  ])

  return (
        <>
          <section className='container'>
              <AddTask />
              <Tasks tasks={task} />
          </section>
          
        </>
  )
}

export default App