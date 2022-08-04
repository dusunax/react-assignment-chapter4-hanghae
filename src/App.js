import React from "react";
import Router from "./pages/router/Router";
import styled from "styled-components";
import './index.css'

export default function App() {
  return (
    <Wrap>
      <h3 className="title">할일 목록</h3>
      <Router />
    </Wrap>
  );
}

const Wrap = styled.div`
width: 85%;
max-width: 600px;
height: calc(100vh - 50px);

position: relative;
display: flex;
flex-flow: column;

margin: 20px auto;
padding: 1em 2em;
box-sizing: border-box;
border-radius: 24px;

border: 7px solid #222;
background-color: #222;
box-shadow: 2px 10px 10px #aaa;

text-align: center;

.title {
    position: absolute;
    left: -20px;
    top: -20px;

    padding: 3px 30px;
    margin: 8px;
    border-radius: 10px 10px 0 10px;

    background: #0682c1;
    color: #fff;

    display: inline-block;

    font-family: 'Kirang Haerang', cursive;
    font-size: 20px;
    font-weight: 500;
}

`