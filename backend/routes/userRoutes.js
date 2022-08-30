import { Router } from "express";
import { authUser } from "../controller/userController.js";

const userRoutes = Router();

userRoutes.route('/login').post(authUser);

export default userRoutes;