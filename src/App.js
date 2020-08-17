import React, {Component} from 'react';
import { createStore } from 'redux';
import './App.css';
import Todolist from './components/todolist.js'
import Header from './components/header'
import AddTodo from './components/addtodo'

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
    case 'REMOVE_TODO':
      return {
        todos : [
          ...state.todos.slice(0, action.id),
          ...state.todos.slice(action.id+1 )
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
    
    this.setState({todos:[...store.getState().todos]})
    store.subscribe( () => {
      console.log(store.getState());
      this.setState({todos:[...store.getState().todos]});
    })
  }
  addTodo = () => {
    const todo = this.todoInput.current.value;
    store.dispatch({
        type: 'ADD_TODO',
        todo : todo
    });
  }

  removeTodo = (i) => {
    console.log(i)
    store.dispatch({
        type: 'REMOVE_TODO',
        id: i
    });
  }

  render () {
  return (
    <div className="App">
      <Header/>
      <AddTodo></AddTodo>
       <Todolist todos={todos} />
    </div>
  );
}
}

export default App;
