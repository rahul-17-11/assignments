import { useState, useReducer } from "react"

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADDTODO":
      return {
        ...state, todoList: [...state.todoList, payload]
      }
    case "REMOVETODO":
      return {
        ...state, todoList: state.todoList.filter((ele) => ele.id != payload)
      }
    case "CHANGESTATUS":
      return {
        ...state, todoList: state.todoList.map((ele) => ele.id == payload ? { ...ele, status: !ele.status } : ele)
      }
    default:
      return state
  }
}

export function Todo() {
  const [state, dispatch] = useReducer(todoReducer, { todoList: [] })
  const [todoData, setTodoData] = useState({ todo: "", status: false })

  function handleAdd() {
    if (todoData.todo.trim()) {
      dispatch({ type: "ADDTODO", payload: { ...todoData, id: Math.random() } })
      setTodoData({ todo: "", status: false })
    }
  }

  function handleRemove(id) {
    dispatch({ type: "REMOVETODO", payload: id })
  }

  function handleStatus(id) {
    dispatch({ type: "CHANGESTATUS", payload: id })
  }

  function handleChange(e) {
    const { name, checked, value } = e.target
    setTodoData({ ...todoData, [name]: name == "status" ? checked : value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">Todo List</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <input 
              value={todoData.todo}
              onChange={handleChange} 
              name="todo" 
              type="text" 
              placeholder="Add a new task..." 
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
            />
            <div className="flex items-center">
              <input 
                checked={todoData.status}
                onChange={handleChange} 
                name="status" 
                type="checkbox" 
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-500">Done</span>
            </div>
          </div>
          <button 
            onClick={handleAdd}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Add Todo
          </button>
        </div>
        
        {state.todoList.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Tasks ({state.todoList.length})</h2>
            <ul className="space-y-3">
              {state.todoList.map((todo) => (
                <li key={todo.id} className="border-b pb-3 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className={`text-lg ${todo.status ? "line-through text-gray-400" : "text-gray-700"}`}>
                        {todo.todo}
                      </span>
                      <span className={`ml-3 px-2 py-1 text-xs rounded-full ${todo.status ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {todo.status ? "Done" : "Pending"}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleStatus(todo.id)}
                        className="text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-600 py-1 px-2 rounded transition duration-200"
                      >
                        {todo.status ? "Undo" : "Complete"}
                      </button>
                      <button 
                        onClick={() => handleRemove(todo.id)}
                        className="text-sm bg-red-100 hover:bg-red-200 text-red-600 py-1 px-2 rounded transition duration-200"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p>No tasks yet. Add your first todo!</p>
          </div>
        )}
      </div>
    </div>
  )
}