import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos : ['fare la spesa', 'fare i compiti', 'chiamare mamma']
    }
  }
  render (){
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          TODO LIST 
        </h1>
        
          
      </header>
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
