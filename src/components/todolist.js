import React from 'react';
import Todo from './todo'
export default function todoList({todos, removeTodo, id}){
//dispatch(removeTodo(i))
return (
<ul>
{
 todos.map( (todo,i) => <Todo id={i} onClick={removeTodo} key={i} todoItem ={todo}/>)
}
</ul>

);
}