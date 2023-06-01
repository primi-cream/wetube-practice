import express from "express"
import globalRouter from "./routers/globalRouter";
import usersRouter from "./routers/usersRouter";
import videosRouter from "./routers/videosRouter";

const app = express();
const PORT = 8000;

//PUG View Engine 적용
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/", globalRouter);
app.use("/users", usersRouter);
app.use("/videos", videosRouter);

app.listen(PORT,() => {console.log(`Start Server http://localhost:${PORT}`)});
