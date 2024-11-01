import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./config/db.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
