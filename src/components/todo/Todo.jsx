import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { deleteNote, doneNote } from "../../redux/config/modules/note";
import { useDispatch } from "react-redux";

export default function Todo(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id, title, context, done} = props.list;
    return (
        <Card>
            <div className='card-body' onClick={()=>{
                dispatch(doneNote(id));
            }}>
                <span className='todo-title'>
                    {title}
                </span>
                <span className='todo-text'>
                    {context.length>20 ? context.slice(0, 20)+"..." : context}
                </span>
                <span className='ox'>
                    {done ? 'O' : "X" }
                </span>
            </div>
            <button  
            onClick={()=>{
                navigate(id)
                props.setPageChange(true)
            }}>
                상세보기
            </button>
            <button  
            style={{color: '#3caeff'}}
            onClick={()=>{
                dispatch(deleteNote({id: id}))
                props.setPageChange(true)
            }}>
                삭제
            </button>
        </Card>
    )
}

const Card = styled.div`
animation: pop .2s;
transition: all .2s;

&:hover {
    background-color: rgba(240, 241, 245, 0.4);
}

.card-body {
    display: flex;
    flex-flow: column;
    cursor: pointer;
}

.ox {
    font-size: 40px;
    font-family: 'Kirang Haerang', cursive;
    color: #ffffff;
}

.ox:hover {
    color: #ffb700;
}

.todo-title {
    color: #3cffeb;
    font-weight: 800;
    font-size: 14px;
    margin-bottom: 3px;
}

font-size: 11px;
width: 80%;
background-color: rgba(240, 241, 245, 0.3);
border: 1px solid #b6b6b6;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
border-radius: 8px;

padding: 8px;
box-sizing: border-box;

button {
    all: unset;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
    margin: 0 7px;
}

`