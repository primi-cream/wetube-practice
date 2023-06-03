import "./db";
import "./models/Video";
import app from "./app"

app.listen(process.env.PORT,() => {console.log(`Start Server http://localhost:${process.env.PORT}`)});