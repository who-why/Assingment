import React, { useState } from 'react'
import './App.css'
import Checkbox from './Checkbox'
import Button from './Button'

const App = () => {

  const [todo, setTodo] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim() !== '') {
      setTodo([...todo, text])
      setText('')
    }
  }
  const completeTodo = (index) => {
    const newTodo = [...todo]
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }

  return (
    <div className='main'>
          <div className="todo">
                   <h1>Todo</h1>

                   {/* todo list */}
                    
                  <div className="todo-list">
                     {todo.map((item, index) => (
                      <div key={index} className="todo-items">
                         
                            <Checkbox label={item} completeTodo={completeTodo} index={index} />
                        
                      </div>
                       ))}
                  </div>

                {/* add todo here */}
   
              <div className="add-todo">
                    <input 
                     type="text"
                     placeholder='Add task here...'
                     value={text}
                     onChange={(e) => setText(e.target.value)}
                    />
                     <div onClick={addTodo}>
                        <Button size="big">
                          Add
                        </Button>
                     </div>
              </div>
          </div>
    </div>
  )
}

export default App
