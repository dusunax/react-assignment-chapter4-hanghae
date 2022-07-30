import TodoDetail from "../../components/todoDetail/TodoDetail";
import TodoList from "../../components/todoList/TodoList";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from "../../components/header/Header";
import styled from "styled-components";
import Form from "../../components/form/Form";

export default function Router(){
    return (
        <BrowserRouter>

            <Sticky>
                <Header />
                <Form />
            </Sticky>

            <Container>
                <Routes>
                    <Route path="/*" element={<TodoList />} />
                    <Route path="/:title" element={<TodoDetail />} />
                    <Route element={<TodoDetail />} />
                </Routes>
            </Container>

        </BrowserRouter>
    )
}

const Sticky=styled.div`
position: sticky;
top: 0;
`
const Container=styled.div`
text-align: center;
`