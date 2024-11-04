import express from "express";
import Competitions from "../controllers/competitions.js";
const competitionRouter = express.Router();
const competitions = new Competitions();

competitionRouter.get("/", competitions.getCompetitions);

export default competitionRouter;
