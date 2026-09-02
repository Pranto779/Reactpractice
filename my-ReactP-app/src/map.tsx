// interface

interface User {
  name: string;
  languge: string;
}

const users: User[] = [
  { name: 'pranto', languge: 'java' },
  { name: 'Utsho', languge: 'javaScript' },
  { name: 'Jhanker M..', languge: 'Python' },
];
export default function Objectmap() {
  return (
    <>
      {users.map((user) => (
        <div className="counter">
          <li>Name: {user.name}</li>
          <li>Languge:{user.languge} </li>
        </div>
      ))}
    </>
  );
}
