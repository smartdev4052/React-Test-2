import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../actions/TodoAction";

const TodoAdd = ({
    todo, addTodo
}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <form>
            <div>

                <div>
                <label htmlFor="full-name-stacked">Title</label>
                </div>

                <div>
                <div>
                    <input type="text" id="full-name-stacked" name="fullName" autoComplete="name" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                </div>
            </div>
            <div>

                <div>
                <label htmlFor="username-stacked">Content</label>
                </div>

                <div >
                <div >
                    <label htmlFor="textarea">Please add comment about todo...</label>
                    <textarea id="textarea" name="textarea" rows="3" onChange={(e)=>setContent(e.target.value)}>{content}</textarea>
                </div>
                </div>
            </div>
            <div>
                <div>
                <Link name="add-details"
                    to="/todos"onClick={()=>addTodo(title, content)} > Add </Link>
                <Link name="add-details"
                    to="/todos"> Back </Link>
                
                </div>
            </div>
        </form>
    );
};

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(TodoAdd);