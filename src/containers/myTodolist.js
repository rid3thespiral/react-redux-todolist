import {connect} from 'react-redux';
import Todolist from '../components/todolist';
import {removeTodo} from '../actions/index';

//Higher Order Component Decorator
const mapStateToProps = (state) => {
    return {
        todos: [...state.todos]
    }
}
const myConnect = connect(mapStateToProps, {removeTodo});
const MyTodoList = myConnect(Todolist);

export default MyTodoList;