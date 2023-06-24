import { useState } from "react";

const users = [
  {
    name: "Sarah",
    age: 20,
  },
  { name: "John", age: 32 },
  {
    name: "Alex",
    age: 24,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
      {/* <div>{user&& user.name}</div> */}
      {/* The first approach returns undefined and the second one returns null if the user is null*/}
      {user?.age}
    </div>
  );
};

export default UserSearch;
