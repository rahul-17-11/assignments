import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const UserProfile = ({
  name,
  age,
  email,
  bio,
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
  function logout() {
    setLoggedIn(false);
  }
  return (
    <div className="profile">
      <button className="logout" onClick={logout}>
        Logout
      </button>
      <Avatar imageUrl={imageUrl} />
      <UserInfo name={name} age={age} email={email} bio={bio} />
    </div>
  );
};

export default UserProfile;
