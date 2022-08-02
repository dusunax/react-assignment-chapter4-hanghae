import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

export default function TodoDetail(){
    let [title, setTitle] = useState(null);
    let [text, setText] = useState(null);
    let [currId, setCurrId] = useState(null);
    const data = useSelector((state) => state.note.list)
    let {id:curr_id} = useParams();
    
    const navigate = useNavigate();

    
    useEffect(()=>{
        const noteSelected = data.filter(list => list.id === curr_id)[0]
        console.log(noteSelected);
        setTitle(noteSelected.title)
        setText(noteSelected.context)
        setCurrId(noteSelected.id)
    },[]);

    return (
        <CardDetail>
            <h3 className="title">할일</h3>
            <strong>
                {title}
            </strong>
            <br />
            {text}
            <hr />
            <span className='id-tag'>
                id: {currId}
            </span>
            <button onClick={()=>{
                navigate('/')   
            }}>
                뒤로 가기
            </button>
        </CardDetail>
    )
}

const CardDetail = styled.div`
width: 100%;
min-height: 330px;

font-size: 14px;
display: flex;
justify-content: space-between;
flex-flow: column;
background-color: rgba(255, 255, 255, 0.3);
border-radius: 0 0 10px 10px;

padding: 35px;
box-sizing: border-box;

position: relative;

button {
    all: unset;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
}

.title {
    position: absolute;
    left: -15px;
    top: -38px;
    padding: 3px 30px;
    margin: 8px;
    display: inline-block;
    background: #0682c1;
    border-radius: 10px 10px 0 10px;
    font-family: 'Kirang Haerang', cursive;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
}

.id-tag {
    position: absolute;
    left: 10px;
    top: 5px;
    color: #fff;
}
`