import {useParams, useNavigate} from 'react-router-dom'
import styled from 'styled-components';

export default function TodoDetail(){
    const {title} = useParams();
    const navigate = useNavigate();
    return (
        <CardDetail>
            {title}
            <hr />
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

button {
    all: unset;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
}
`