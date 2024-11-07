import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  playerId: { type: Number, required: true, unique: true },
  name: { type: String },
  position: { type: String },
  dateOfBirth: { type: String },
  nationality: { type: String },
});

const TeamSchema = new mongoose.Schema({
  teamId: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  shortHand: { type: String },
  crestImg: { type: String },
  coach: { type: String },
  venue: { type: String },
  squad: [PlayerSchema],
  competitions: [{ type: Number }],
  lastUpdated: { type: Date, default: Date.now },
});

export const Team = mongoose.model("Team", TeamSchema);
export const Player = mongoose.model("Player", PlayerSchema);
