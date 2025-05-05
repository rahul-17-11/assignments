const LoginMessage = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back, User!</h2> : <h2>Please log in.</h2>}
    </div>
  );
};

export default LoginMessage;
