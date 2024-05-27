import express from 'express'
import { ProjectInfo, allProjects, createProject } from '../controllers/projects.js';


const projectRoutes=express.Router();

projectRoutes.post("/createProject",createProject);
projectRoutes.get("/projects",allProjects);
projectRoutes.get("/projectinfo/:id",ProjectInfo);

export default projectRoutes;