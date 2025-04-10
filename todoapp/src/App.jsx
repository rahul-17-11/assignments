import Parent from "./components/Parent"
import {Routes,Route} from "react-router-dom"
import { Todo } from "./components/Todo"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/context" element={<Parent />} />
    </Routes>
  )
}

export default App