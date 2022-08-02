import TodoDetail from "../../components/todoDetail/TodoDetail";
import TodoList from "../../components/todoList/TodoList";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from "../../components/header/Header";
import styled from "styled-components";
import Form from "../../components/form/Form";

export default function Router(){
    return (
        <>
            <Header />
            <Form />

            <Routes>
                <Route path="/*" element={<TodoList />} />
                <Route path="/:id" element={<TodoDetail />} />
                <Route element={<TodoDetail />} />
            </Routes>
        </>
    )
}