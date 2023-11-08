import Test from "./Test";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await res.json();
  return json;
}

export default async function Page() {
  const users = await getUsers();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {users.map((user) => (
        <span key={user.id}>{user.name}</span>
      ))}
      <Test />
    </div>
  );
}
