import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} from "../controllers/taskController.js";
import { taskMiddleware } from "../middleware/taskMiddleware.js";

const taskRouter = Router();
taskRouter.get("/", taskMiddleware, getAllTask);
taskRouter.post("/", taskMiddleware, createTask);
taskRouter.put("/:id", taskMiddleware, updateTask);
taskRouter.delete("/:id", taskMiddleware, deleteTask);

export default taskRouter;
