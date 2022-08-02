import Todo from "../todo/Todo";
import { useSelector, useDispatch } from "react-redux";
import { loadNote } from '../../redux/config/modules/note';
import { useEffect } from "react";
import styled from "styled-components";

export default function TodoList(){
    const dispatch = useDispatch();
    const data = useSelector((state) => state.note.list)
    const listDone = data.filter(list => list.done )
    const listNotDone = data.filter(list => !list.done )
    
    useEffect(()=>{
        dispatch(loadNote(data))
    },[]);

    return (
        <MyList>
            <h3 className="title">할일 목록</h3>
            <div className="contents-area">

                <div className="left">
                    <p>해냄</p>
                    {listDone.map(list => {
                        return <Todo 
                            list={list} 
                            key={list.id}
                        />
                    })}
                </div>

                <div className="right">
                    <p>아직</p>
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
position: relative;

.contents-area {
    height: 450px;
    display: flex;
    background-image: linear-gradient( transparent, rgba(108, 113, 123, 0.1));
    overflow-y: scroll;
}

.contents-area > div {
    flex: 0 0 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10px;
    word-break: break-word;
}

.title {
    position: absolute;
    left: -15px;
    top: -37px;
    padding: 3px 30px;
    margin: 8px;
    display: inline-block;
    background: #0682c1;
    border-radius: 10px 10px 0 10px;
    font-family: 'Kirang Haerang', cursive;
    font-weight: 500;
}

p {
    color: #222;
    padding: 5px 1em;
    margin: 0px;
    border-bottom: 1px dotted #222;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Kirang Haerang', cursive;
}

`