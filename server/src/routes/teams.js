import express from "express";
import Teams from "../controllers/teams.js";
const teamsRouter = express.Router();
const teams = new Teams();

teamsRouter.get("/all", teams.getTeams);
teamsRouter.get("/:id", teams.getTeamById);
teamsRouter.get("/competition/:id", teams.getTeamsByCompId);
export default teamsRouter;
