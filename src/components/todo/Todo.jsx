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
            <span>{props.list.title}</span>
            <span>{props.list.context}</span>
            <span>{props.list.done?'O':"X"}</span>
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
`