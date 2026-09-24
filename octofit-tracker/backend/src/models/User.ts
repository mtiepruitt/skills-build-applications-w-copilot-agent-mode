import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fitnessLevel: { type: String, required: true },
    favoriteActivity: { type: String, required: true },
    team: { type: String, required: true },
    joinedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export default model('User', userSchema);