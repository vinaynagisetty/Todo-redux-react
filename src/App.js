import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add_todo, Edit } from "./Actions"
import TodoList from "./TodoList";

function App() {
  let dispatch = useDispatch()
  let [todoValue, SettodoValue] = useState('')
  let HandleTodo = (todoValue) => {
    if (todoValue.trim()) {
      const newTodo = {
        title: todoValue
      }
      dispatch(Add_todo(newTodo))
      SettodoValue("")
    }

  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      HandleTodo(todoValue);
    }
};
  return (


    <>
      <div className="container w-50 mt-5">

        <h3 className="text-primary text-center">Todo list using Redux</h3>
        <div className="input-group">
          <input type="text" value={todoValue} onKeyDown={handleKeyDown} className="form-control" name="" id="" onChange={
            (e) => {
              SettodoValue(e.target.value)
            }
          } />
          <button className="btn btn-primary"
            onClick={
              () => {
                HandleTodo(todoValue)
              }
            }>Add</button>
        </div>

        <TodoList />
      </div>

    </>
  )
}
export default App;