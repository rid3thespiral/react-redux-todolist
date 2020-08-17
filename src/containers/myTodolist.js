import {connect} from 'react-redux';
import Todolist from '../components/todolist';

//Higher Order Component Decorator
const mapStateToProps = (state) => {
    return {
        todos: [...state.todos]
    }
}
const myConnect = connect(mapStateToProps);
const MyTodoList = myConnect(Todolist);

export default MyTodoList;