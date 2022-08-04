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
                maxLength={20}
                autoFocus={true}
                autoComplete='off'
                />
                <label 
                htmlFor="context" 
                style={{display: 'none'}}
                >
                    내용
                </label>
                <textarea
                name="context"
                id="context"
                variant="outlined"
                size="small"
                ref={contextRef}
                placeholder="내용을 입력하세요."
                minLength={1} autoComplete='off'
                maxLength={30}
                />
                <Button 
                variant="contained"
                color="secondary"
                size="small"
                onClick={()=>{
                    submitNote()
                }}
                >
                    더하기
                </Button>
            </Container>
        </MyFormControl>
    )
}

const MyFormControl = styled.form`
& > div {
    padding-bottom: 10px;
    border-bottom: 3px dotted #fff;

    font-size: 14px;

    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 7px;
}

input, textarea {
    all: unset;
    width: 100%;
    max-width: 200px;
    padding: 6px 20px;
    border-radius: 20px;
    font-size: 13px;
    background: #fff;
}

input:focus, textarea:focus {
    box-shadow: 0px 2px 10px #ddd;
}

button {
    border-radius: 8px;
    font-family: 'Kirang Haerang', cursive;
}

textarea[name="context"] {
    height: 40px;
    
    word-break: keep-all;
    word-wrap: break-word;
    resize: none;
}
`