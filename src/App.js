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
min-width: 800px;
max-width: 1024px;
height: 90vh;
margin: 20px auto;
border-radius: 20px;

background-color: #F6F6F6;
text-align: center;
`