import express from 'express'
import { login, registration } from '../controllers/user.js';

const userRoutes = express.Router();

userRoutes.post("/registration",registration);
userRoutes.post("/login",login);

export default userRoutes;