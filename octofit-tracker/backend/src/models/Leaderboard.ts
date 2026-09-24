import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    rank: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    team: { type: String, required: true },
    totalPoints: { type: Number, required: true },
    weeklyCaloriesBurned: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model('Leaderboard', leaderboardSchema);