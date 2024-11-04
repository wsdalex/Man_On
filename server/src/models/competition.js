import mongoose from "mongoose";

const CompetionSchema = new mongoose.Schema({
  competitionId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
  emblemImg: { type: String },
  lastUpdated: { type: Date, default: Date.now },
});

const Competition = mongoose.model("Competition", CompetionSchema);

export default Competition;
