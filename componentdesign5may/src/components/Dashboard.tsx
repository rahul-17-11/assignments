import LoginMessage from "./LoginMessage";

const Dashboard = () => {
  return (
    <div>
      <LoginMessage isLoggedIn={true} />
      <LoginMessage isLoggedIn={false} />
    </div>
  );
};

export default Dashboard;
