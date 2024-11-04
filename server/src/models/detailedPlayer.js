import mongoose from "mongoose";

const DetailedPlayerSchema = new mongoose.Schema({
  playerID: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  position: { type: String },
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  dateOfBirth: { type: String },
  nationality: { type: String },
  shirtNumber: { type: Number },
  lastUpdated: { type: Date, default: Date.now },
});

const DetailedPlayer = mongoose.model("Player", PlayerSchema);

export default DetailedPlayer;
