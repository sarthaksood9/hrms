import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
    TaskName: {
        type: String,
        require: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects',
        // required: true
    },
    assignedTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees'
    }],
    TaskDiscription: {
        type: String,
        require: true
    },
    TaskDeadLine: {
        type: Date,
        require: true
    },
    taskStatus:{
        type:String,
        require:true,
    }
})

const taskModel = mongoose.model("tasks", taskSchema);

export default taskModel;