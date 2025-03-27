import { Router } from "express";
import { signin, signup } from "../controllers/authController.js";

const authRouter = Router();
app.post("/signup", signup);
app.post("/login", signin);

export default authRouter;
