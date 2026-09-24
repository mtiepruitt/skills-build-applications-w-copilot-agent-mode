import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    mascot: { type: String, required: true },
    motto: { type: String, required: true },
    memberCount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model('Team', teamSchema);