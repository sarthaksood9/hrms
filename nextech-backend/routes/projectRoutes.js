import express from 'express'
import { allProjects, createProject } from '../controllers/projects.js';


const projectRoutes=express.Router();

projectRoutes.post("/createProject",createProject);
projectRoutes.get("/projects",allProjects);

export default projectRoutes;