import React, {Component} from 'react';
import './App.css';
import MyTodoList from './containers/myTodolist'
import Header from './components/header'
import AddTodo from './containers/addnew'

class App extends Component {
 
  render () {
  return (
    <div className="App">
      
      <Header/>
      <div className="container">
      <AddTodo></AddTodo>
       <MyTodoList/>
       </div>
    </div>
  );
}
}

export default App;
