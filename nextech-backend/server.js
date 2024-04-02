import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";


const app = express();

app.use(bodyParser.json());

app.use(cors());


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://sarthaksood09:VKP2eUnfR0HN2lzL@cluster0.sjhk127.mongodb.net/?retryWrites=true&w=majority", {
        dbName: "Nextch"
    }).then(() => {
        console.log("connected to database")
    }).catch((e) => {
        console.log(e);
    })
}

connectDatabase();



app.get("/", (req, res) => {
    res.send("hi")
})



app.use("/api/v1/user",userRoutes);
app.use("/api/v1/admin",projectRoutes)

console.log(new Date)







app.listen(4000, () => {
    console.log("sever is working on 4000");
})