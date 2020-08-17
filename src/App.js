import React, {Component} from 'react';
import './App.css';
import MyTodoList from './containers/myTodolist'
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
       <MyTodoList/>
    </div>
  );
}
}

export default App;
