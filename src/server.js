import { configDotenv } from "dotenv";
import app from "./app.js";
import authRouter from "./routes/authRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

configDotenv();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
