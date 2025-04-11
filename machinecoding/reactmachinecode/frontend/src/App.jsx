import { useEffect, useState } from "react";
import axios from "axios";


function App() {
    const URL = import.meta.env.VITE_API_URL
    
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function fetchUsers() {
    try {
      let res = await axios.get("http://localhost:5000/api/users");
      setUserList(res.data.users || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users", user);
      alert("User Added");
      fetchUsers();
      console.log("MY URL")
    } catch (error) {
      console.log(error);
    }
  }
  async function handleUpdate(_id) {
    try {
      await axios.put(`http://localhost:5000/api/users/${_id}`, user);
      alert("User Updated");
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    if (!userId) return alert("Please select a user to delete.");
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      alert("User Deleted");
      fetchUsers();
      handleCancel();
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelect(user) {
    const {_id,firstName,lastName} = user
    setUserId(_id);
    setIsSelected(true);
    setUser({ firstName, lastName });
  }

  function handleCancel() {
    setUserId(null);
    setIsSelected(false);
    setUser({ firstName: "", lastName: "" });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">User Manager</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* User List */}
          <div className="w-full md:w-1/2 border rounded-lg p-4 max-h-80 overflow-y-auto bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            {userList.map((ele) => (
              <div
                key={ele._id}
                className={`flex justify-between items-center p-2 mb-2 rounded ${
                  isSelected && ele._id === userId
                    ? "bg-yellow-200"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <span>{ele.firstName + " " + ele.lastName}</span>
                <button
                  className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => handleSelect(ele)}
                >
                  Select
                </button>
              </div>
            ))}
          </div>

          {/* User Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block font-medium text-sm mb-1">
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  name="firstName"
                  value={user.firstName}
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-sm mb-1">
                  Last Name
                </label>
                <input
                  onChange={handleChange}
                  name="lastName"
                  value={user.lastName}
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  placeholder="Enter last name"
                  required
                />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  disabled={isSelected}
                  type="submit"
                  className={`bg-green-500 ${isSelected?"cursor-not-allowed bg-green-700":"hover:bg-green-600"}  text-white px-4 py-2 rounded`}
                >
                  Create
                </button>
                <button
                  disabled={!isSelected}
                  type="button"
                  className={`bg-red-500 ${!isSelected?"cursor-not-allowed bg-red-700":"hover:bg-red-600"} text-white px-4 py-2 rounded`}
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  disabled={!isSelected}
                  type="button"
                  className={`bg-green-500 ${!isSelected?"cursor-not-allowed bg-green-700":"hover:bg-green-600"}  text-white px-4 py-2 rounded`}
                  onClick={()=>handleUpdate(userId)}
                >
                  Update
                </button>
                <button
                  disabled={!isSelected}
                  type="button"
                  className={`bg-slate-400 ${!isSelected?"cursor-not-allowed bg-slate-600":"hover:bg-slate-600"}  text-white px-4 py-2 rounded`}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
