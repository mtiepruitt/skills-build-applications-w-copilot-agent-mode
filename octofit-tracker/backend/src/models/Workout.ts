import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    targetMuscleGroups: [{ type: String, required: true }],
    exercises: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export default model('Workout', workoutSchema);