import "./App.css";

function App() {
  return (
    <>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Student></Student>
    </>
  );
}

function Student() {
  const money = 20;
  const person = { name: "Nayan", age: 12 };
  return (
    <h3>
      I am {person.name} with age: {person.age},i have some money about {money}{" "}
      tk
    </h3>
  );
}
export default App;
