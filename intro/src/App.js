import './App.css';
import Header from './components/Header';
import { Simple, Simple2, PlayerList } from './components/examples';
import { Counter } from './components/Counter';
import { FormDemo } from './components/FormDemo';

const players = [
  { id: 1, firstname: 'Gianluigi', lastname: 'Donnarumma', num: 1, inActivity: true},
  { id: 2, firstname: 'Leo', lastname: 'Bonucci', num: 4, inActivity: true },
  { id: 3, firstname: 'Giorgio', lastname: 'Chiellini', num: 3, inActivity: false }
];

function App() {
  return (
    <div>
      <Header />
      <Simple />
      <Simple2 message="tout va bien" />
      <PlayerList dataSource={players} />
      <Counter />
      <FormDemo />
    </div>
  );
}

export default App;
