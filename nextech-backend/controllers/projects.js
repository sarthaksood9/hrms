import ProjectModel from "../models/ProjectModel.js";
import taskModel from "../models/taskModel.js";


export const createProject = async (req, res) => {
    const { Projectname, ProjectMambers, ProjectDiscription, ProjectDeadLine, ProjectStatus, tasks } = req.body;
    const obj = req.body;

    try {
        // const project = await ProjectModel.create({
        //     ...obj
        // })

        // return res.status(201).json({ message: "Project created", project });



        const project = await ProjectModel.create({
            Projectname,
            ProjectMambers,
            ProjectDiscription,
            ProjectDeadLine,
            ProjectStatus,
        });

        // Step 2: Extract the project ID
        const projectId = project._id;

        // Step 3: Create tasks associated with the project
        const createdTasks = await Promise.all(tasks.map(async task => {
            const createdTask = await taskModel.create({
                ...task,
                project: projectId,
            });
            return createdTask;
        }));

        return res.status(201).json({ message: "Project created", project, tasks: createdTasks });


    }
    catch (e) {
        console.log(obj)
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


const updatePercentageDone = async (projectId) => {
    const tasks = await taskModel.find({ project: projectId });

    const totalTasks = tasks.length;
    console.log(totalTasks, projectId)
    const doneTasks = tasks.filter(task => task.taskStatus === 'Done').length;

    const percentageDone = totalTasks > 0 ? (doneTasks / totalTasks) * 100 : 0;

    await ProjectModel.findByIdAndUpdate(projectId, { percentageDone });

};


export const allProjects = async (req, res) => {
    // const projects = await ProjectModel.find();

    // res.json(projects);
    try {
        const projects = await ProjectModel.find();

        // Update percentageDone for each project
        for (const project of projects) {
            await updatePercentageDone(project._id);
        }

        // Fetch the projects again to get updated data
        const updatedProjects = await ProjectModel.find();

        res.status(200).json(updatedProjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error)
    }

}

export const ProjectInfo = async (req, res) => {
    try {
        const ProjectId = req.params.id;


        await updatePercentageDone(ProjectId);


        const updatedProjects = await ProjectModel.findById(ProjectId);

        return res.status(201).json(updatedProjects);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server error" })
    }
}