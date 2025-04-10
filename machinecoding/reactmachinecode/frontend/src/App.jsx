import { useEffect, useState } from "react";
import axios from "axios"

function App() {

  const [user,setUser] = useState({
    firstName:"",
    lastName:""
  });
  const [userList,setUserList] = useState([])

  function handleChange(e){
    const {name,value} = e.target
    setUser({...user,[name]:value})
  }

  async function fetchUsers(){
    try {
      let res = await axios.get("http://localhost:5000/api/users")
      console.log(res)
      setUserList(res.data.users || [])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users",user)
      alert("User Added")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flexgap-3 h-screen justify-center items-center">
      <div className="flex flex-col gap-3 h-screen justify-center items-center">
        <input className="p-1 border-2 border-slate-400" type="text" placeholder="Search" />
        <div className="flex gap-3">
          <div className="size-36 border-2 overflow-scroll border-slate-400">
            {
              userList.map((ele)=>(
                <p key={ele._id}>{ele.firstName+" "+ele.lastName}</p>
              ))
            }
          </div >
          <div className="flex flex-col gap-2">
            <label>
            First Name:
            </label>
            <input onChange={handleChange} name="firstName" className="p-1 border-2 border-slate-400" type="text" placeholder="First Name" />
            <label>
              Last Name:
            </label>
            <input onChange={handleChange} name="lastName" className="p-1 border-2 border-slate-400" type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={handleSubmit}>Create</button>
          <button>Update</button>
          <button>Delete</button>
          <button>Cancel</button>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default App
