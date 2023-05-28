import express from "express"

const app = express();
const PORT = 8000;

const homeController = (req, res) =>{
    return res.send("<h1>Welcome!!</h1>");
}

const homeEditController = (req, res) => {
    return res.send("<h1>Edit page</h1>");
}


const globalRouter = express.Router();

globalRouter.get("/",homeController);
globalRouter.get("/edit",homeEditController);

const middleware = (req, res, next) => {
    console.log("Middleware!!!!");
    next();
}

app.use(middleware);
app.use("/",globalRouter)


app.listen(PORT,() => {console.log(`Start Server http://localhost:${PORT}`)});