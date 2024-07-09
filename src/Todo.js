import { useState } from "react";
import { useDispatch } from "react-redux";
import { Delete_todo, Edit } from "./Actions";



function Todo({ id, title }) {
    let [edditValue, setEditValue] = useState(false)
    let [ChangedTitle, setChangedTitle] = useState(title)
    let dispatch = useDispatch()
    let handleTodo = () => {
        if (ChangedTitle.trim()) {
            dispatch(Edit({ id: id, title: ChangedTitle }))
            setEditValue(false);

        }
    }
    let handleDelete = () => {
        dispatch(Delete_todo(id))
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleTodo();
        }
    };
    return (
        <>
            <div>
                {edditValue ? (
                    <div className="input-group">
                        <input type="text" className="form-control" onKeyDown={handleKeyDown}   value={ChangedTitle} onChange={
                            (e) => {
                                setChangedTitle(e.target.value)
                            }
                        } />
                        <button className="btn btn-success"onClick={() => handleTodo()}>Save</button>
                    </div>
                ) : (

                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-8">
                                <p>{ChangedTitle}</p>
                            </div>
                            <div className="col-4">
                                <div className="actions">
                                    <button className="btn btn-warning m-2" onClick={() => {
                                        setEditValue(true);
                                    }}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => {
                                        handleDelete()
                                    }}>Delete</button>


                                </div>
                            </div>
                        </div>


                    </li>
                )}
            </div>

        </>
    )





}
export default Todo;