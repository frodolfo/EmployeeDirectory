import Greeting from "./components/Greeting";
import Employees from "./components/Employees";

import './App.css';

function App() {
  const people = [
    {
      firstName: 'Fred',
      lastName: 'Rodolfo',
      company: 'Cubic Corporation'
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      company: 'ACME'
    }
  ];

  return (
    <div id="app" className="App">
      <Greeting name="Fred" greeting="Hi" />
      <Employees data={people} />
    </div>
  );
}

export default App;
