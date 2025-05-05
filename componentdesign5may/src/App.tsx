import { useState } from "react";
// import Dashboard from "./components/Dashboard";
// import ParentGreeting from "./components/ParentGreeting";
import UserDashboard from "./components/UserDashboard";
// import UserProfile from "./components/UserProfile";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {/* <ParentGreeting /> */}
      {/* <UserProfile
        name="Jhon"
        email="john@email.com"
        bio="I am an imaginary person, which people use a lot for demo purpose"
        imageUrl="https://avatar.iran.liara.run/public/20"
      /> */}
      {/* <Dashboard /> */}
      <UserDashboard
        name="Jhon"
        age={22}
        email="john@email.com"
        bio="I am an imaginary person, which people use a lot for demo purpose"
        imageUrl="https://avatar.iran.liara.run/public/20"
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
      />
    </>
  );
}

export default App;
