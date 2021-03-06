import React from 'react';
import './App.css';
import Instructions from './Instructions';
import Counter from './Counter';


function App() {

  const tallennetutTehtavat = JSON.parse(localStorage.getItem("lista")) || [];
  const [items, setItems] = React.useState(tallennetutTehtavat);
  const [task, setTask] = React.useState("");
  
  function handleChange(event) {
    setTask(event.target.value);
  }

  React.useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(items));
  }, [items]);
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

    function onSelectRow(id) {
      const updated = items.map(tehtava => {
        if (tehtava.id === id) {
          return {...tehtava, completed: true}
        }
        return tehtava;
      });
      setItems(updated);
    }

    function clearItems() {
      setItems([])
    }
    
    

  return (
    <div className="App">
      <header className="App-header">
        <Counter list={items}/>

        <form>
          <input type="text" value={task} onChange={handleChange}/>
          <button className="button" onClick={handleSubmit}>LISÄÄ</button> 
        </form>

        {items.map(tehtava => <Instructions klikkaus={onSelectRow} kuvaus={tehtava.title} thid={tehtava.id} valmis={tehtava.completed} />)}
       
        {items.length > 0 &&
        <button className="clear" onClick={clearItems}>TYHJENNÄ</button>
        }

      </header>
    </div>
  );
}

export default App;
