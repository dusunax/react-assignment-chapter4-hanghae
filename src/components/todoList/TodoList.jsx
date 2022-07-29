import Todo from "../todo/Todo";
import { useSelector } from "react-redux/es/exports";

export default function TodoList(){
    const data = useSelector((state) => state.note.list)

    console.log("--Redux Stores--")
    console.log(data)

    return (
        <>
            TodoList
            {data.map(list => <Todo list={list} key={list.id} />)}
        </>
    )
}