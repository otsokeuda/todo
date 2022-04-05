import React from 'react';
import './App.css';
import Instructions from './Instructions';
import Counter from './Counter';
import Link from './Link';

function App() {
 

  const [items, setItems] = React.useState([]);
  const [task, setTask] = React.useState("");
  
  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const uusiTehtava = {
      id: items.length + 1,
      title: task,
      completed: false     
    }
    setItems(items.concat(uusiTehtava));
    setTask("");
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <Counter list={items.length}/>

        <form>
          <input type="text" value={task} onChange={handleChange}/>
          <button className="button" onClick={handleSubmit}>LISÄÄ</button>
          
        </form>

        {items.map(tehtava => <Instructions kuvaus={tehtava.title} />)}

        <Link text="tekstiä" target="https://reactjs.org" />
      </header>
    </div>
  );
}

export default App;
