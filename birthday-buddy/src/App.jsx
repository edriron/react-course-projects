import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const handleRandomPeople = () => {
    const newList = data.filter(() => Math.floor(Math.random() * 2) === 1);
    setPeople(newList.length > 0 ? newList : []); // fallback if empty
  };

  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear all
        </button>
        <p>&nbsp;</p>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople(data)}
        >
          Restore
        </button>
        <p>&nbsp;</p>
        <button
          type="button"
          className="btn btn-block"
          onClick={() => handleRandomPeople()}
        >
          Random
        </button>
      </section>
    </main>
  );
}

export default App;
