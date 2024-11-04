import Team from "../models/team.js";
import axios from "axios";

class Teams {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.BASE_URL,
      headers: { "X-Auth-Token": process.env.API_KEY },
    });
    this.topCompetitionIds = [
      2016, //Championship
      2021, //Premier League
      2001, //Champions League
      2015, //Ligue 1
      2002, //Bundesliga
      2019, //Serie A
      2014, //La Liga
    ];
  }

  async fetchTeams() {
    try {
      for (const competitionId of this.topCompetitionIds) {
        const response = await this.apiClient.get(
          `/competitions/${competitionId}/teams`
        );
        const teamData = response.data.teams;

        for (const team of teamData) {
          await this.storeTeam(team);
        }

        console.log(`Successfully Stored ${teamData.length} teams`);
      }
    } catch (error) {
      console.log(`There was an error retrieving teams: ${error}`);
    }
  }

  async storeTeam(teamData) {
    try {
      const team = Team.findOneAndUpdate(
        { teamId: teamData.id },
        {
          teamId: teamData.id,
          name: teamData.name,
          shortHand: teamData.tla,
          crestImg: teamData.crest,
          coach: teamData.coach.name,
          venue: teamData.venue,
          lastUpdated: new Date(),
        },
        { upsert: true, new: true }
      );
      return team;
    } catch (error) {
      console.log(`There was an error storing a team: ${error}`);
    }
  }
}

export default Teams;