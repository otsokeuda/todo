
import './App.css';
import Instructions from './Instructions';
import Counter from './Counter';
import Link from './Link';

function App() {
  const tehtavaLista = ["aaaaaa", "bbbbbbb", "cccccccc", "dddddddd"];

  return (
    <div className="App">
      <header className="App-header">
        <Counter list={tehtavaLista.length}/>

        {tehtavaLista.map(tehtava => <Instructions kuvaus={tehtava} />)}

        <Link text="tekstiä" target="https://reactjs.org" />
      </header>
    </div>
  );
}

export default App;
