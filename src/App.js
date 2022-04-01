
import './App.css';
import Instructions from './Instructions';
import Logo from './Logo';
import Link from './Link';

function App() {
  const todo = ["aaaaaa", "bbbbbbb", "cccccccc", "dddddddd"];
  todo.map(todo => {
    <div>{todo}</div>
  });

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Instructions />
        <Link />
      </header>
    </div>
  );
}

export default App;
