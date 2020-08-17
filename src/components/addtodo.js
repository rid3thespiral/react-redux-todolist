import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

function addTodoComponent({dispatch}){
    let todoInput;
return (
    <Fragment>
        <input ref = {(node) => { todoInput = node }} />
      <button onClick = {
          () => 
          dispatch(addTodo(todoInput.value))
          }>Add</button>
      </Fragment>
)
}

export default connect()(addTodoComponent);