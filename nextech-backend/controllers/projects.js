import ProjectModel from "../models/ProjectModel.js";


export const createProject = async(req,res)=>{
    const {Projectname,ProjectMambers,ProjectDiscription,ProjectDeadLine,ProjectStatus}=req.body;
    const obj=req.body;

    try{
        const project= await ProjectModel.create({
            ...obj
        })

        return res.status(201).json({message:"Project created",project});
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

export const allProjects = async(req,res)=>{
    const projects= await ProjectModel.find();

    res.json(projects);

}