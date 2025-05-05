const UserInfo = ({
  name,
  age,
  email,
  bio,
}: {
  name: string;
  age: number;
  email: string;
  bio: string;
}) => {
  return (
    <div>
      <h2>
        Name: <i>{name}</i>
      </h2>
      <h2>
        Age: <i>{age}</i>
      </h2>
      <h3>
        Email: <i>{email}</i>
      </h3>
      <p>
        Bio: <i>{bio}</i>
      </p>
    </div>
  );
};

export default UserInfo;
