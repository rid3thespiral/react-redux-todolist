import React, {Fragment} from 'react';

export default function addTodoComponent({addnew}){
    let todoInput;
return (
    <Fragment>
        <input ref = {(node) => { todoInput = node }} />
      <button onClick = {
          () => {
              addnew(todoInput.value)
              todoInput.value = "";
            }
          }>Add</button>
    </Fragment>
)
}

