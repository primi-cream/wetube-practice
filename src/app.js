import express from "express";
//const express = require("express");

//Create Express Application >> express()
const app = express();
const PORT = 4000;
//const handleListening = () => console.log("Server listenting on port ");


//반드시 fucntion으로 보내야한다.
//app.get("/",() => console.log("home"));와 같은 상태면 브라우저의 request를 반응하지 못하므로 
//브라우저는 계속 기다리기만 할 것이다. 브라우저에게 "/"" Path 정보를 받았으나 정작 돌려주는건 없으므로.
//따라서 response가 필요.

//express로부터 받은 request 와 response object
app.get("/",(req, res) => {
    console.log(req);
    return res.end;
});

//Listen
app.listen(PORT, () => console.log(`Server listenting on port http://localhost:${PORT}`));