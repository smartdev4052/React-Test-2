import { connect } from 'react-redux';
import Todo from './Todo';
import { Link } from 'react-router-dom';

const Todos = ({
  todos,
}) => {

  return (
    <div>
      <div>
        <Link to="/todo-add">Add New</Link>
      </div>
      {
        todos.length
          ?
          <ul>
          {
            todos.map(todo => (
              <Todo todoDetail={todo} key={todo.id}/>
            ))
          }
          </ul>
          :
          "No Todos"
      }
    </div>
  );
}

const mapStateToProps = (state) =>  ({
  todos: state.Todos.todos
});

export default connect(mapStateToProps, null)(Todos);