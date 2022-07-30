import Todo from "../todo/Todo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadNote } from '../../redux/config/modules/note';
import { useEffect, useState } from "react";

export default function TodoList(){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.note.list)
    
    useEffect(()=>{
        dispatch(loadNote(data))
    },[]);

    return (
        <>
            TodoList
            {data.map(list => {
                return <Todo 
                list={list} 
                key={list.id}
                />
            })}
        </>
    )
}