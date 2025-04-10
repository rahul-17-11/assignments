// import { useState } from "react";

function App() {

  // const [user,setUser] = useState({
  //   firstName:"",
  //   lastName:""
  // });
  // const [userList,setUserList] = useState([])

  function handleSubmit(e){
    e.preventDefault();

  }

  return (
    <>
      <div className="flexgap-3 h-screen justify-center items-center">
      <div className="flex flex-col gap-3 h-screen justify-center items-center">
        <input className="p-1 border-2 border-slate-400" type="text" placeholder="Search" />
        <div className="flex gap-3">
          <div className="size-36 border-2 border-slate-400">

          </div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label>
            First Name:
            </label>
            <input className="p-1 border-2 border-slate-400" type="text" placeholder="First Name" />
            <label>
              Last Name:
            </label>
            <input className="p-1 border-2 border-slate-400" type="text" placeholder="Last Name" />
          </form>
        </div>
        <div className="flex gap-2">
          <button>Create</button>
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
