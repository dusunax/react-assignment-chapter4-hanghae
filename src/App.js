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
width: 85%;
max-width: 600px;
height: calc(100vh - 50px);

margin: 20px auto;
padding: 1em 2em;
box-sizing: border-box;
border-radius: 24px;
border: 7px solid #222;
box-shadow: 2px 10px 10px #aaa;

background-color: #222;
text-align: center;
`