import { deleteTodo, setCurrentTodo } from '../actions/TodoAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Todo = ({
    todoDetail, deleteTodo, setCurrentTodo
}) =>   {

    const updateTodo = () =>    {
        setCurrentTodo(todoDetail);
    }

    return (
        <>
        <li>
            <Link to="/todo-detail" onClick={ updateTodo }>{ todoDetail.title } </Link>
            <Link to="/todo-edit" onClick={updateTodo}>Edit</Link>
            <button onClick={()=>deleteTodo(todoDetail.id)}>Delete</button>
        </li>
        </>
    )
}

const mapDispatchToProps = {
    deleteTodo,
    setCurrentTodo
}

export default connect(null, mapDispatchToProps)(Todo);