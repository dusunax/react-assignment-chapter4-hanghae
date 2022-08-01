import React from "react";
import Router from "./pages/router/Router";
import styled from "styled-components";
import './index.css'

export default function App() {
  return (
    <Wrap>
      <Router />
    </Wrap>
  );
}

const Wrap = styled.div`
width: 100%;
max-width: 600px;
min-height: 90vh;

margin: 20px auto;
padding: 2em;
box-sizing: border-box;
border-radius: 20px;
border: 7px solid #222;
box-shadow: 2px 10px 10px #aaa;

background-color: #3AB4F2;
text-align: center;
`