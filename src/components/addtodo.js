import React, {Fragment} from 'react';

export default function addTodoComponent({addnew}){
    let todoInput;
return (
    <div className = "addtodo">
    <input ref = {(node) => { todoInput = node }} />
      <button onClick = {
          () => {
              addnew(todoInput.value)
              todoInput.value = "";
            }
          }>Add</button>
    </div>
)
}

