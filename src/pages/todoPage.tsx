import React, {useEffect, useState} from "react";
import {ToDoForm} from "../components/ToDoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";


declare var confirm:(question: string)=> boolean;

export const TodoPage: React.FC=()=>{
    const [todos, addTodo] = useState<ITodo[]>([]);

    useEffect(()=>{
        const savedTodos= JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        addTodo(savedTodos)
    }, []);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }

        addTodo(prev => [newTodo, ...prev])
    }

    const toggleHandler=(id: number)=>{
        addTodo(prev=> prev.map(todo=>{
            if(todo.id===id){
                return (
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                )
            }
            return todo
        }))
    }

    const removeHandler=(id: number)=>{
        // const shouldRemove= window.confirm('');
        const shouldRemove= confirm('Do you really want to delete this task?');
        if(shouldRemove){
            addTodo(prev=> prev.filter(todo=>todo.id!== id)
            )
        }

    }

    return(
        <>
            <ToDoForm onAdd={addHandler}/>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </>
    )
}