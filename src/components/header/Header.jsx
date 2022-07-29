import Container from "@mui/material/Container";
import styled from "styled-components";

export default function Header(){
    return (
        <Nav>
            <Container>
                <span className="logo">My ToDo List</span>
                <span>:React</span>
            </Container>
        </Nav>
    )
}

const Nav = styled.nav`
width: 100%;
max-width: 1200px;
margin: 0 auto;
line-height: 40px;

& > div {
    display: flex;
    justify-content: space-between;
}

.logo {
    font-weight: 600;
}
`