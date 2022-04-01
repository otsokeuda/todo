
import './App.css';
import Instructions from './Instructions';
import Logo from './Logo';
import Link from './Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Instructions text="This is new instruction" />
        <Link />
      </header>
    </div>
  );
}

export default App;
