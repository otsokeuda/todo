import React from 'react';
import './App.css';
import Instructions from './Instructions';
import Counter from './Counter';
import Link from './Link';

function App() {
  const tehtavaLista = [
    {
      id: 1,
      title: 'Osta banaania',
      completed: false,
    },
    {
      id: 2,
      title: 'Soita kaverille',
      completed: false,
    },
  ];
  
  const [items, setItems] = React.useState(tehtavaLista);

  return (
    <div className="App">
      <header className="App-header">
        <Counter list={tehtavaLista.length}/>

        {items.map(tehtava => <Instructions kuvaus={tehtava.title} />)}

        <Link text="tekstiä" target="https://reactjs.org" />
      </header>
    </div>
  );
}

export default App;
