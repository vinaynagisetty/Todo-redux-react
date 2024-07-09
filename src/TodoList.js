import { useSelector } from "react-redux";
import Todo from "./Todo";



function TodoList(){
  let data=  useSelector(
        (state)=>{
            return state.Todos;
        }
    )
  
    return (
        
        <ul className="list-group mt-4">
        {data.map((todo)=>{
            return  <Todo key={todo.id} id={todo.id} title={todo.title} />
        })}
        </ul>


    )
}
export default TodoList;