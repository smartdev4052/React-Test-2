import { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateTodo } from "../actions/TodoAction";

const TodoEdit = ({
    todo, updateTodo
}) => {
    
    const [title, setTitle] = useState(todo.title);
    const [content, setContent] = useState(todo.content);

    return (
        <form >
            <div>

                <div>
                <label htmlFor="full-name-stacked">Title</label>
                </div>

                <div>
                <div>
                    <input type="text" id="full-name-stacked" name="fullName" autoComplete="name" defaultValue={todo.title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                </div>
            </div>
            <div>

                <div>
                <label htmlFor="username-stacked">Content</label>
                </div>

                <div>
                <div>
                    <label htmlFor="textarea">Please add comment about todo...</label>
                    <textarea id="textarea" name="textarea" rows="3" onChange={(e)=>setContent(e.target.value)}>{todo.content}</textarea>
                </div>
                </div>
            </div>
            <div>
                <div>
                <Link name="add-details"
                    to="/todos"onClick={()=>updateTodo(todo.id, title, content)} >Update</Link>
                <Link name="add-details"
                    to="/todos">Back</Link>
                </div>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => ({
    todo: state.Todos.currentTodo
});

const mapDispatchToProps = {
    updateTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoEdit);