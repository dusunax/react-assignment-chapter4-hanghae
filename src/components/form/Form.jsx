import { Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import styled from "styled-components";

export default function Form(){
    return (
        <MyFormControl>
            <Container>
                <label htmlFor="todoTitle" style={{display: 'none'}}>
                    제목
                </label>
                <TextField
                hiddenLabel
                id="todoTitle"
                variant="outlined"
                size="small"
                placeholder="제목을 입력하세요."
                // label="제목"
                />
                <label htmlFor="todoContext" style={{display: 'none'}}>
                    내용
                </label>
                <TextField
                hiddenLabel
                id="todoContext"
                variant="outlined"
                size="small"
                placeholder="내용을 입력하세요."
                // label="내용"
                />
                <Button 
                variant="outlined"
                color="secondary">
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