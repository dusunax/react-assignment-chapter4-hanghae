import Header from "../../components/header/Header";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Form from "../../components/form/Form";
import Router from "../router/Router";

export default function Layout(){
    return (
        <>
            <Sticky>
                <Header />
                <Form />
            </Sticky>

            <Container>
                <Router />
            </Container>
        </>
    )
}

const Sticky=styled.div`
position: sticky;
top: 0;
`