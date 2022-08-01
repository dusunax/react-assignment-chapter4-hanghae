import Todo from "../todo/Todo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadNote } from '../../redux/config/modules/note';
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function TodoList(){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.note.list)
    const listDone = data.filter(list => list.done )
    const listNotDone = data.filter(list => !list.done )
    console.log(listDone)
    
    useEffect(()=>{
        dispatch(loadNote(data))
    },[]);

    return (
        <MyList>
            <h3 className="title">할일 목록</h3>
            <div className="contents-area">

                <div className="left">
                    <h4>해냄</h4>
                    {listDone.map(list => {
                        return <Todo 
                        list={list} 
                        key={list.id}
                        />
                    })}
                </div>

                <div className="right">
                    <h4>아직</h4>
                    {listNotDone.map(list => {
                        return <Todo 
                        list={list} 
                        key={list.id}
                        />
                    })}
                </div>

            </div>
            
        </MyList>
    )
}

const MyList=styled.div`
color: #fff;

.contents-area {
    height: 100%;
    display: flex;
    overflow-y: scroll;
}

.contents-area > div {
    flex: 1 1 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10px;
}

.title {
    padding: 3px 30px;
    display: inline-block;
    background: #0682c1;
    border-radius: 10px 10px 0 10px;
    font-family: 'Kirang Haerang', cursive;
    font-weight: 500;
}

h4 {
    color: #222;
    padding: 5px 1em;
    margin: 10px 0;
    border-bottom: 1px dotted #222;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Kirang Haerang', cursive;
}

`