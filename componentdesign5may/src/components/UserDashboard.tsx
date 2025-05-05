import UserProfile from "./UserProfile";

const UserDashboard = ({
  name,
  age,
  email,
  bio,
  isLoggedIn,
  imageUrl,
  setLoggedIn,
}: {
  name: string;
  age: number;
  email: string;
  bio: string;
  imageUrl: string;
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}) => {
  function login() {
    setLoggedIn(true);
  }
  return (
    <div className="dashboard">
      {isLoggedIn ? (
        <UserProfile
          name={name}
          age={age}
          email={email}
          isLoggedIn={isLoggedIn}
          imageUrl={imageUrl}
          bio={bio}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <div>
          <h3 className="message">You need to log in</h3>
          <button className="login" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
