import { useNavigate } from 'react-router-dom'

export default function NotFound(){
    const navigate = useNavigate();
    
    return (
        <>
            <p>
                페이지를 찾을 수 없습니다.
            </p>
            <button style={{
                all: 'unset',
                color: "#fff",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: "12px",
            }} onClick={()=>{
                navigate('/')   
            }}>
                뒤로 가기
            </button>
        </>
    )
}
