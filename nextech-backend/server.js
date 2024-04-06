import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskModel, { taskSchema } from "./models/TaskModel.js";


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



app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", projectRoutes)

console.log(new Date)


app.post('/tasks', async (req, res) => {
    try {
        const { TaskName, assignedTo, TaskDiscription, TaskDeadLine, project } = req.body;
        const task = await taskModel.create({
            TaskName: TaskName,
            project: project,
            assignedTo: assignedTo,
            TaskDiscription: TaskDiscription,
            TaskDeadLine: TaskDeadLine,

        })
        console.log(task);
        // await task.save();
        return res.status(201).json({ message: "task created" });
    } catch (error) {
        return res.status(500).json({ Message: error.message });
    }
});

app.get("/protasks/:id", async (req, res) => {
    console.log(req.params.id);

    try {
        const tasks = await taskModel.find({ project: req.params.id });

        return res.status(201).json({ tasks });
    }
    catch (e) {
        return res.status(500).json({ message: e.Message });
    }
})


app.get("/tasksforuser/:id", async (req, res) => {
    try {
        const tasks = await taskModel.find({ assignedTo: req.params.id }).populate("assignedTo");
        return res.status(201).json({ tasks });
    } catch (error) {
        console.error('Error fetching tasks:', error.message);
        throw error;
    }
})







app.listen(4000, () => {
    console.log("sever is working on 4000");
})