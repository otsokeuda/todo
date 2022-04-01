
import './App.css';
import Instructions from './Instructions';
import Logo from './Logo';
import Link from './Link';

function App() {
  const todo = ["aaaaaa", "bbbbbbb", "cccccccc", "dddddddd"];  

  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        {todo.map(item => <Instructions text={item} />)}

        <Link />
      </header>
    </div>
  );
}

export default App;
