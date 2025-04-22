import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"


function App() {
  return (
    <>
    <Routes>
      <Route path="/signup"element={<Signup />} />
      <Route path="/"element={<Login />} />
      <Route path="/dashboard" element={<p>Hello you are logged in</p>} />
    </Routes>
    </>
  )
}

export default App
