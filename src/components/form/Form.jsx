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
                autoFocus={true}
                autoComplete='off'
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
                minLength={1}autoComplete='off'
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
    border-bottom: 3px dotted #fff;

    font-size: 14px;

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

input {
    all: unset;
    padding: 10px 40px;
    border-radius: 20px;
    font-size: 12px;
    background: #fff;
}
`