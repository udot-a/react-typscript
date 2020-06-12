import React, {useEffect, useState} from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";
import * as M from "materialize-css";

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];

        setTodos(saved);

        M.AutoInit();
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos.length])

    const handleAddTodo = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now().toString(),
            completed: false
        }
        setTodos(prevTodos => [newTodo, ...prevTodos])
    }

    const markItem = (id: string) => {
        setTodos(prev => prev.map(item => {
                if (item.id === id) {
                    return {
                        ...item, completed: !item.completed
                    };
                }

                return item
            })
        );
    }

    const delItem = (id: string) => {
        const isDel = window.confirm("Вы точно хотите удалить элемент");

        if (isDel) {
            setTodos(prev => prev.filter(item => item.id !== id));
        }
    }

    return (
        <>
            <TodoForm onAdd={handleAddTodo}/>

            <TodoList
                delItem={delItem}
                markItem={markItem}
                todos={todos}

            />

        </>

    );
}