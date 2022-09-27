import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TodoDetail = ({
    todo
}) =>   {
    return (
        <>
        <form>
            <div>

                <div>
                <label>Title</label>
                </div>

                <div>
                <label>{todo.title}</label>
                </div>
            </div>
            <div>

                <div>
                <label htmlFor="username-stacked">Content</label>
                </div>

                <div>
                    <span>{todo.content}</span>
                </div>
            </div>
            <div>
                <div>
                <Link name="add-details" to="/todos">Back</Link>
                </div>
            </div>
            </form>
        </>
    );
}

const mapStateToProps = (state) => ({
    todo: state.Todos.currentTodo
});

export default connect(mapStateToProps, null)(TodoDetail);