import express from "express";
import Teams from "../controllers/teams.js";
const teamsRouter = express.Router();
const teams = new Teams();

teamsRouter.get("/all", teams.getTeams);
teamsRouter.get("/:id", teams.getTeamById);

export default teamsRouter;
