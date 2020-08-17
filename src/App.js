import React, {Component} from 'react';
import './App.css';
import Todolist from './components/todolist.js'
import Header from './components/header'
import AddTodo from './components/addtodo'



class App extends Component {
  constructor(){
    super();
  }

 
  

  render () {
  return (
    <div className="App">
      <Header/>
      <AddTodo></AddTodo>
       <Todolist todos={[]}/>
    </div>
  );
}
}

export default App;
