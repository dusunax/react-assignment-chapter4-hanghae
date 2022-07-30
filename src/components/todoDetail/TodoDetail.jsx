import {useParams, useNavigate} from 'react-router-dom'

export default function TodoDetail(){
    const {title} = useParams();
    const navigate = useNavigate();
    return (
        <>
            {title}
            <hr />
            <button onClick={()=>{
                navigate('/')   
            }}>
                뒤로 가기
            </button>
        </>
    )
}