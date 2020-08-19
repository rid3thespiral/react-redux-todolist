import {connect} from 'react-redux';
import { addTodo } from '../actions/index';
import addTodoComponent from '../components/addtodo';

const mapDispatchToProps = (dispatch) => {
    return {
        addnew: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}

export default connect(null, mapDispatchToProps)(addTodoComponent);