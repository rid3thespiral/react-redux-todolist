import React from 'react';

export default function Todolist({todos}){
return(<ul>
          {
          todos.map( (todo,i)=> <li key={i}> {todo} <button>-</button></li> )
          }
</ul> );
}