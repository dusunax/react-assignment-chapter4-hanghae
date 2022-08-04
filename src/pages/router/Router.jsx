import TodoDetail from "../todoDetail/TodoDetail";
import TodoList from "../todoList/TodoList";
import {Routes, Route} from 'react-router-dom'

import Header from "../../components/header/Header";
import Form from "../../components/form/Form";
import NotFound from "../notFound/NotFound";

export default function Router(){
    return (
        <>
            <Header />
            <Form />

            <Routes>
                <Route path="/*" element={<TodoList />} />
                <Route path="/:id" element={<TodoDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}