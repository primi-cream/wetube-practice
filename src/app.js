import express from "express";
//const express = require("express");

//Create Express Application >> express()
const app = express();
const PORT = 4000;
//const handleListening = () => console.log("Server listenting on port ");

//Listen
app.listen(PORT, () => console.log(`Server listenting on port http://localhost:${PORT}`));