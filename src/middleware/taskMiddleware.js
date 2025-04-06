import jwt from "jsonwebtoken";

export const taskMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.jwt; // Rename to avoid conflict
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id }; // Ensure decoded contains an `id` field
    next();
  } catch (error) {
    console.error("Error in the task middleware:", error);
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};
