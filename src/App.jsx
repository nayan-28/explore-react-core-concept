import "./App.css";

function App() {
  return (
    <>
      <Device name="Laptop" price="50000"></Device>
      <Device name="Mobile" price="1500"></Device>
      <Student></Student>
    </>
  );
}

function Device(props) {
  return (
    <h2>
      This is {props.name}. Price:{props.price}
    </h2>
  );
}

function Student() {
  const money = 20;
  const person = { name: "Nayan", age: 12 };
  return (
    <h3 className="student">
      I am {person.name} with age: {person.age},i have some money about {money}{" "}
      tk
    </h3>
  );
}
export default App;
