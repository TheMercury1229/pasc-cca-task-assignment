import db from "../config/db.js";

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const task = await db.task.create({
      data: {
        title,
        description,
        userId,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    console.error("Error in createTask:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// Get All Tasks
export const getAllTask = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const user = await db.user.findUnique({
      where: { id: userId },
      include: { tasks: true },
    });

    return res.status(200).json({
      success: true,
      tasks: user?.tasks || [],
    });
  } catch (error) {
    console.error("Error in getAllTask:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { title, description, status } = req.body;
    const { id } = req.params;

    const task = await db.task.findUnique({
      where: { id: Number(id) },
    });

    if (!task || task.userId !== userId) {
      return res.status(404).json({
        success: false,
        message: "Task not found or unauthorized",
      });
    }

    const updatedTask = await db.task.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        status,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    console.error("Error in updateTask:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    const task = await db.task.findUnique({
      where: { id: Number(id) },
    });

    if (!task || task.userId !== userId) {
      return res.status(404).json({
        success: false,
        message: "Task not found or unauthorized",
      });
    }

    const deletedTask = await db.task.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      task: deletedTask,
    });
  } catch (error) {
    console.error("Error in deleteTask:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
