import Container from "@mui/material/Container";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

export default function Header(){
    const navigate = useNavigate();
    return (
        <Nav>
            <Container>
                <span className="logo" onClick={()=> navigate("/")}>
                    My ToDo List ☀
                </span>
                <span className="subText">:React</span>
            </Container>
        </Nav>
    )
}

const Nav = styled.nav`
width: 100%;
max-width: 1200px;
margin: auto;
padding-top: 20px;
line-height: 40px;
color: #fff;
font-family: 'Kirang Haerang', cursive;

& > div {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}
.subText {
    font-size: 24px;
}
.logo {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 50px;
    cursor: pointer;
    
}

.logo:hover {
    opacity: .7
}

`