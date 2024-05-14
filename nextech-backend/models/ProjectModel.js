import mongoose from "mongoose";
import { taskSchema } from "./TaskModel.js";


const ProjectSchema = new mongoose.Schema({

    Projectname:{ 
        type: String, 
        require: true,
        unique:true
    },
    ProjectMambers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees'
    }],
    ProjectDiscription:{
        type:String,
        require:true,
    },
    ProjectDeadLine:{
        type:Date,
        require:true,
    },
    ProjectStatus:{
        type:String,
    },
    tasks:{
        type:[taskSchema]
    }
})

const ProjectModel=mongoose.model("Projects",ProjectSchema);

export default ProjectModel;