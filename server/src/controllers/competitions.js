import Competition from "../models/competition.js";
import axios from "axios";

class Competitions {
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

  async fetchCompetitions() {
    try {
      const response = await this.apiClient.get("/competitions");
      const allCompetitions = response.data.competitions;
      const topCompetitions = allCompetitions.filter((competition) =>
        this.topCompetitionIds.includes(competition.id)
      );
      return topCompetitions;
    } catch (error) {
      console.log(`There was an error retrieving competitions: ${error}`);
    }
  }

  async storeCompetitions() {
    try {
      const filteredCompetitions = await this.fetchCompetitions();

      for (const competition of filteredCompetitions) {
        await Competition.findOneAndUpdate(
          { competitionId: competition.id },
          {
            competitionId: competition.id,
            name: competition.name,
            code: competition.code,
            emblemImg: competition.emblem,
            lastUpdated: new Date(),
          },
          { upsert: true, new: true }
        );
      }

      console.log(
        `Successfully Stored ${filteredCompetitions.length} competitions`
      );
      return filteredCompetitions;
    } catch (error) {
      console.log(`There was an error storing competitions: ${error}`);
    }
  }

  async getCompetitions(req, res) {
    const competitions = await Competition.find();
    res.status(200).json({ competitions: competitions });
  }
}

export default Competitions;
