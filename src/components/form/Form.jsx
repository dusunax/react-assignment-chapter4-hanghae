import React from 'react'
import { addNote } from "../../redux/config/modules/note";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

export default function Form(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const titleRef = React.useRef(null);
    const contextRef = React.useRef(null);

    const submitNote = () => {
        if(titleRef.current.value === "" || contextRef.current.value === ""){
            alert('값을 입력해주세요.')
        } else {
            const newNote = {
                title: titleRef.current.value, 
                context: contextRef.current.value
            };
            dispatch(addNote(newNote));
            titleRef.current.value="";
            contextRef.current.value="";
            navigate('/')
        }
    }

    return (
        <MyFormControl>
            <Container>
                <label 
                htmlFor="title" 
                style={{display: 'none'}}
                >
                    제목
                </label>
                <input
                name="title"
                id="title"
                variant="outlined"
                size="small"
                ref={titleRef}
                placeholder="제목을 입력하세요."
                minLength={1}
                />
                <label 
                htmlFor="context" 
                style={{display: 'none'}}
                >
                    내용
                </label>
                <input
                name="context"
                id="context"
                variant="outlined"
                size="small"
                ref={contextRef}
                placeholder="내용을 입력하세요."
                minLength={1}
                />
                <Button 
                variant="outlined"
                color="secondary"
                onClick={()=>{
                    submitNote()
                }}
                >
                    New Todo
                </Button>
            </Container>
        </MyFormControl>
    )
}

const MyFormControl = styled.form`

& > div {
    padding-top: 10px;
    padding-bottom: 10px;
    background-image: linear-gradient( transparent 80%, #f5f5f5);

    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
}

input {
    font-size: 12px;
    background: #fff;
}
`