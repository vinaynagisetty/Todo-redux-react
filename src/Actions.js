 export const Add_todo=(todo)=>{
    return {type:"add_todo",payload:todo}
}
export const Edit=(todo)=>{
    return {type:"edit",payload:todo}
}
export const Delete_todo=(id)=>{
    return {type:"delete_todo",payload:id}
}

