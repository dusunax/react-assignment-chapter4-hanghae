import TodoDetail from "../todoDetail/TodoDetail";
import TodoList from "../todoList/TodoList";
import {Routes, Route} from 'react-router-dom'

import Header from "../../components/header/Header";
import Form from "../../components/form/Form";
import NotFound from "../notFound/NotFound";
import { useState } from "react";

export default function Router(){
    const [pageChange, setPageChange] = useState(false);
    let propsPack={pageChange, setPageChange}

    return (
        <>
            <Header />
            <Form propsPack={propsPack}/>

            <Routes >
                <Route path="/*" element={<TodoList setPageChange={setPageChange} />} />
                <Route path="/:id" element={<TodoDetail setPageChange={setPageChange} />}  />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}