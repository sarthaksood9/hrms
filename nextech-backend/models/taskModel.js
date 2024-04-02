import mongoose from "mongoose";

export const taskSchema= new mongoose.Schema({
    TaskName:{
        type:String,
        require:true
    },
    TaskAssingedTo:[{
        type: Schema.Types.ObjectId, 
        ref: 'User' 
        // require:true,
    }],
    TaskDiscription:{
        type:String,
        require:true
    },
    TaskDeadLine:{
        type:Date,
        require:true
    }
})

const taskModel=mongoose.model("tasks",taskSchema);

export default taskModel;