import Todo from "../../components/todo/Todo";
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
            {data.length === 0 ? "리스트를 입력해주세요.":""}
            
        </MyList>
    )
}

const MyList=styled.div`
color: #fff;
position: relative;
border-radius: 0 0 16px 16px;
background-image: linear-gradient(rgba(108, 113, 123, 0.2), transparent);

.contents-area {
    height: 65vh;
    display: flex;
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
    color: #ffffff;
    padding: 5px 1em;
    margin: 0px;
    margin-top: 8px;
    border-bottom: 1px dotted #ffffff;
    font-size: 20px;
    font-weight: 500;
    font-family: 'Kirang Haerang', cursive;
}

`