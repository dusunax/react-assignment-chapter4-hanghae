import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/config/modules/note";

export default function TodoDetail(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((state) => state.note.list)
    let {id:curr_id} = useParams();

    const noteSelected = data.filter(list => list.id === curr_id)[0]
    const {title, id, context}=noteSelected

    return (
        <CardDetail>
            <div>
                <span className="section-tag">할일</span>
                <h2 style={{marginBottom: '0'}}>
                    {title}
                </h2>
                <br />
                {context}
                <span className='id-tag'>
                    id: {id}
                </span>
            </div>
            <div>
                <button onClick={()=>{
                    navigate('/')   
                }}>
                    뒤로 가기
                </button>
                <button  
                style={{color: '#3caeff'}}
                onClick={()=>{
                    dispatch(deleteNote({id: id}))
                    navigate('/')  
                }}>
                    삭제
                </button>
            </div>
        </CardDetail>
    )
}

const CardDetail = styled.div`
width: 100%;
flex: 1 1 auto;

font-size: 14px;
display: flex;
justify-content: space-between;
flex-flow: column;
border-radius: 0 0 10px 10px;

background-image: linear-gradient(rgba(108, 113, 123, 0.2), transparent);
color: #fff;

padding: 35px;
box-sizing: border-box;

position: relative;

button {
    all: unset;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    margin: 0 20px;
}

.section-tag {
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
    font-size: 12px;
}
`