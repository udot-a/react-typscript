import React, {useState, useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
    const ref = useRef<HTMLInputElement>(null);

    // const [title, setTitle] = useState<string>("");

    // const handleChange: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const handleKeyPress: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            onAdd(ref.current!.value);
            ref.current!.value = "";
            // console.log(title);
            // setTitle("");
        }
    }

    return (
        <div className={"input-field mt2"}>
            <input
                id={"title"}
                onKeyPress={handleKeyPress}
                placeholder={"Введите дело..."}
                ref={ref}
                type="text"
            />

            <label
                className={"active"}
                htmlFor="title"
            >
                {"Введите дело:"}
            </label>

        </div>
    )
}

