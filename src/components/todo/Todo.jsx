import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { doneNote } from "../../redux/config/modules/note";
import { useDispatch } from "react-redux";

export default function Todo(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Card onClick={()=>{
            dispatch(doneNote(props.list.id));
        }}>
            <span className='todo-title'>{props.list.title}</span>
            <span className='todo-text'>{props.list.context}</span>
            <span className='ox'>{props.list.done?'O':"X"}</span>
            <button  
            onClick={()=>{
                navigate(props.list.title)
            }}>
                상세보기
            </button>
        </Card>
    )
}

const Card = styled.div`
animation: pop .2s;

.ox {
    font-size: 50px;
    font-family: 'Kirang Haerang', cursive;
    color: #ffa138;
}
.todo-title {
    color: #ffa138;
    font-weight: 800;
    font-size: 16px;
    margin-bottom: 3px;
}

font-size: 14px;
width: 80%;
display: flex;
flex-flow: column;
background-color: rgba(255, 255, 255, 0.3);
border-radius: 8px;

padding: 10px;
box-sizing: border-box;

button {
    all: unset;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
}

`