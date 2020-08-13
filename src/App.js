import React, {Component} from 'react';
import { createStore } from 'redux';
import './App.css';

let todos = ['fare', 'dire'];

function storeReducer(state = [], action){
  switch(action.type){
    case 'ADD_TODO':
    return {
      todos : [
        action.todo,
        ...state.todos
      ]
    }
  
  default:
    return {...state};
  }
}

const store = createStore(storeReducer, {todos: [...todos] } );

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos : [
         
      ]
    }

    this.todoInput = React.createRef('input');
  }

  componentDidMount(){
    const store = createStore(storeReducer, {todos: [...todos] } );
    this.setState({todos:[...store.getState().todos]})
  }
  addTodo = () => {
    const todo = this.todoInput.current.value;
    store.dispatch({
        type: 'ADD_TODO',
        todo : todo
    });
  }
  render () {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          TODO LIST 
        </h1>
        
          
      </header>
      <input ref = {this.todoInput} />
      <button onClick = {this.addTodo}>Add</button>
      <ul>
          {
          this.state.todos.map( (todo,i)=> <li key={i}> {todo} </li> )
          }
        </ul>
    </div>
  );
}
}

export default App;
