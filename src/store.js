import { createStore } from "redux";

let IntialTodos={
    Todos:[],
    id:1
}

let todoReducer=(state=IntialTodos,actions)=>{
  

    switch (actions.type) {
        case "add_todo":
            const newTod={id:state.id,title:actions.payload.title}
            return {
                ...state,Todos:[...state.Todos,newTod],id:state.id+1
                
            };
        case "edit":
            return {
                ...state,Todos:state.Todos.map(
                    (todo)=>todo.id==actions.id?{...todo,title:actions.payload.title}:todo
                )
            };
        case "delete_todo":
            return {
                ...state,Todos:state.Todos.filter(
                    (todo)=>todo.id !==actions.payload
                )
            };
        default:
            return state;
    }
}
const store=createStore(todoReducer)
export default store;