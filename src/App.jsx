import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singers";

function App() {
  const actors = ["Shakib", "Rubel", "Raj"];

  const singers = [
    {
      id: 1,
      name: "Dr. Mahfuzur rahman",
      age: 45,
    },
    {
      id: 2,
      name: "Balam",
      age: 35,
    },
    {
      id: 3,
      name: "Nancy",
      age: 25,
    },
  ];

  return (
    <>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      <Actor name={"Nayan"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {singers.map((singer) => (
        <Singers singer={singer}></Singers>
      ))}
      {/* <Device name="Laptop" price="50000"></Device>
      <Device name="Mobile" price="1500"></Device>
      <Student></Student> */}
    </>
  );
}

function Device(props) {
  const name = props.name;
  const price = props.price;
  return (
    <h2>
      This is {name} Price:{price}
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
