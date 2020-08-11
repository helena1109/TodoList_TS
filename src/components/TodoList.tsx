import React from "react";
import {ITodo} from "../interfaces";

type TodoListProps={
    todos: ITodo[],
    onToggle: (id: number)=> void,
    onRemove: (id: number)=> void,
}

export const TodoList: React.FC<TodoListProps>=({todos, onRemove, onToggle})=>{

    const removeTodo=(e: React.MouseEvent, id: number)=>{
        e.preventDefault();
        onRemove(id)
    }

    if(todos.length===0){
        return (
            <p className='center'>You don't have any plans!</p>
        )
    }
    return(

        <ul>
            {
                todos.map(todo=>{
                    const classes= ['todo'];
                    if(todo.completed){
                        classes.push('completed')
                    }
                    return(
                        <li className={classes.join(' ')} key={todo.id}>
                            <label>
                                <input type='checkbox' checked={todo.completed} onChange={()=>onToggle(todo.id)}/>
                                <span>{todo.title}</span>
                                <i className='material-icons red-text' onClick={(e)=>removeTodo(e, todo.id)}>delete</i>
                            </label>
                        </li>
                    )
                })
            }

        </ul>
    )
}