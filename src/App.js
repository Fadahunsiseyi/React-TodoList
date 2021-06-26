import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'
function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  //When the app loads, we need to listen to the database and fetch new todos as they get added or removed
  useEffect(()=>{
    //the code here fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
      // console.log(snapshot.docs.map(doc => doc.data().todo))
    })
  },[])
  const addTodo = (e) => {
    e.preventDefault();
    // setTodos([...todos, input]);
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className="App">
     <h1>FADAHUNSI SEYI</h1>
     <form>
     <FormControl>
  <InputLabel>Write a todo</InputLabel>
  <Input  value={input} onChange={e => setInput(e.target.value)} />
    </FormControl>
     <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
       Add Todo
     </Button>
     {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
     </form>

  
   
     
     <ul>
     {todos.map(todo =>(
       <Todo todo={todo}/>
     ))}
     </ul>
    </div>
  );
}

export default App;
// "deploy": "npm run build && firebase deploy",