import { configDotenv } from "dotenv";
import express from "express";
import app from "./app.js";

configDotenv();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
