import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./app";

app.listen(process.env.PORT,() => {console.log(`Start Server http://localhost:${process.env.PORT}`)});