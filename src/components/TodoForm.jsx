import { useState } from "react";
import { useTodo } from "../context/todoContext";

function TodoForm() {

    const [todo, setTodo] = useState('')

    const { addTodo } = useTodo();

    const handelSubmit = (e) => {
        e.preventDefault();

        if (!todo) return null;
        
        addTodo({todo, complete: false});
        setTodo('');
    }

    return (
        <form onSubmit={handelSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

