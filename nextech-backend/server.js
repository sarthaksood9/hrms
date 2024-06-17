import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskModel from "./models/taskModel.js";
import userModel from "./models/userModel.js";



const app = express();

app.use(bodyParser.json());

app.use(cors(
    {
        origin: ["https://hrms-two-steel.vercel.app","http://localhost:3000"],
        methods: ["POST", "GET","PUT"],
        credentials: true
    }
));


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
    res.json({names:"hi"});
})



app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", projectRoutes)
// app.use("/projectinfo/:id",projectRoutes)

console.log(new Date)


app.post('/tasks', async (req, res) => {
    try {
        const { TaskName, assignedTo, TaskDiscription, TaskDeadLine, project,taskStatus } = req.body;
        const task = await taskModel.create({
            TaskName: TaskName,
            project: project,
            assignedTo: assignedTo,
            TaskDiscription: TaskDiscription,
            TaskDeadLine: TaskDeadLine,
            taskStatus:taskStatus

        })
        console.log(task);
        // await task.save();
        return res.status(201).json({ message: "task created" });
    } catch (error) {
        return res.status(500).json({ Message: error.message });
    }
});

app.put('/tasks/:id', async (req, res) => {
    try {
        const taskId = req.params.id; // Get task ID from URL parameter
        const { TaskName, assignedTo, TaskDiscription, TaskDeadLine, project,taskStatus } = req.body;

        // Find the task by ID and update it with the new data
        const updatedTask = await taskModel.findByIdAndUpdate(
            taskId,
            {
                TaskName: TaskName,
                project: project,
                assignedTo: assignedTo,
                TaskDiscription: TaskDiscription,
                TaskDeadLine: TaskDeadLine,
                taskStatus:taskStatus
            },
            { new: true, runValidators: true } // Return the updated document and apply schema validation
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' }); // If the task doesn't exist
        }

        return res.status(200).json({ message: 'Task updated successfully', task: updatedTask }); // Successful update
    } catch (error) {
        return res.status(500).json({ message: error.message }); // Handle errors
    }
});


app.get("/protasks/:id", async (req, res) => {
    console.log(req.params.id);

    try {
        const tasks = await taskModel.find({ project: req.params.id }).populate("assignedTo");

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

app.get('/allemployees',async (req,res)=>{
    try{
        const allEmp=  await userModel.find({},"_id name");
        res.status(201).json(allEmp)
    }
    catch(e){
        console.log(e);

    }
})



// app.get('/allemployeesbyname',async (req,res)=>{
//     try{
//         const {query}=req.query;
//         // const employees = await userModel.find({ name: { $regex: query } });
//         res.status(201).send(query)
//     }
//     catch(e){
//         console.log(e);

//     }
// })


app.get('/employees', async (req, res) => {
    try {
        const employees = await userModel.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});









app.listen(4000, () => {
    console.log("sever is working on 4000");
})


export default app;