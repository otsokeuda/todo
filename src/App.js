
import './App.css';
import Instructions from './Instructions';
import Logo from './Logo';
import Link from './Link';

function App() {
  const tehtavaLista = ["aaaaaa", "bbbbbbb", "cccccccc", "dddddddd"];  

  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        {tehtavaLista.map(tehtava => <Instructions kuvaus={tehtava} />)}

        <Link />
      </header>
    </div>
  );
}

export default App;
