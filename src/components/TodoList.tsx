import React from "react";
import {ITodo} from "../interfaces";
import cn from "classnames";

type TodoListProps = {
    todos: ITodo[],
    markItem(id: string): void,
    delItem(id:string): void
}

export const TodoList: React.FC<TodoListProps> = ({todos, markItem, delItem}) => {
    console.log(todos)

    if (!todos.length) {
        return (
            <p className={"center"}>
                {"List is empty!!!"}
            </p>
        )
    }

    return (
        <ul className={"todo-list"}>
            {
                todos.map(({title, completed, id}, key) => {
                    return (
                        <li
                            className={cn("todo", {completed})}
                            key={key}
                        >
                            <label >
                                <input
                                    onChange={markItem.bind(null, id)}
                                    checked={completed}
                                    type="checkbox"
                                />

                                <span>
                                    {title}
                                </span>
                            </label>

                                <i
                                    onClick={delItem.bind(null, id)}
                                    className={"material-icons red-text"}
                                >
                                    {"delete"}
                                </i>
                        </li>
                    )
                })
            }
        </ul>
    );
}