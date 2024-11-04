import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  teamId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  shortHand: { type: String },
  crestImg: { type: String },
  coach: { type: String },
  venue: { type: String },
  lastUpdated: { type: Date, default: Date.now },
});

const Team = mongoose.model("Team", TeamSchema);

export default Team;
