import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { doneNote } from "../../redux/config/modules/note";
import { useDispatch } from "react-redux";

export default function Todo(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Card>
            <div className='card-body' onClick={()=>{
                dispatch(doneNote(props.list.id));
            }}>
                <span className='todo-title'>{props.list.title}</span>
                <span className='todo-text'>{props.list.context}</span>
                <span className='ox'>{props.list.done?'O':"X"}</span>
            </div>
            <button  
            onClick={()=>{
                navigate(props.list.id)
            }}>
                상세보기
            </button>
        </Card>
    )
}

const Card = styled.div`
animation: pop .2s;

.card-body {
    display: flex;
    flex-flow: column;
    cursor: pointer;
}

.ox {
    font-size: 40px;
    font-family: 'Kirang Haerang', cursive;
    color: #ffa138;
}

.ox:hover {
    color: yellow;
}

.todo-title {
    color: #ffa138;
    font-weight: 800;
    font-size: 14px;
    margin-bottom: 3px;
}

font-size: 11px;
width: 80%;
background-color: rgba(255, 255, 255, 0.3);
border-radius: 8px;

padding: 8px;
box-sizing: border-box;

button {
    all: unset;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
}

`