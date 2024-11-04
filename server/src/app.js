import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./config/db.js";
import Competitions from "./controllers/competitions.js";
import competitionRouter from "./routes/competitions.js";
import Teams from "./controllers/teams.js";
dotenv.config();

const app = express();
const competitions = new Competitions();
const teams = new Teams();
app.use(cors());
app.use(express.json());

connectToDatabase();

app.use("/competitions", competitionRouter);
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

export default app;
