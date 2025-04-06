import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter);

export default app;
