import mongoose from "mongoose"
//mongodb://host.docker.internal:27017/wetube-practice
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Erorr", error); 

db.on("error", handleError);
db.once("open", handleOpen);