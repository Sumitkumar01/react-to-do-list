import './App.css';
import {useState} from 'react';
import { ToDoItem } from './component/ToDoItem';
import { InputArea } from './component/InputArea';
function App() {
  
  const [items,setItem] = useState([])
  
  function addItem(note) {
    setItem(prev => ([note,...prev]));
    
  }
  function deleteItem(id){
    setItem((prev) => {
      return prev.filter((item, i) => {
        return i !== id;
      })
    })
  }
  return (

    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea add={addItem}/>
      <div>
        <ul>
          {items.map((todoitem,i) => (<ToDoItem key={i} id={i} text={todoitem} onCheck={deleteItem}/>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
