import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  {
    username: 'alexrunner',
    displayName: 'Alex Rivera',
    email: 'alex.rivera@example.com',
    fitnessLevel: 'Intermediate',
    favoriteActivity: 'Trail running',
    team: 'Cardio Crew',
    joinedAt: new Date('2026-01-08'),
  },
  {
    username: 'samstrength',
    displayName: 'Sam Patel',
    email: 'sam.patel@example.com',
    fitnessLevel: 'Advanced',
    favoriteActivity: 'Strength training',
    team: 'Iron Giants',
    joinedAt: new Date('2026-02-14'),
  },
  {
    username: 'miajumps',
    displayName: 'Mia Chen',
    email: 'mia.chen@example.com',
    fitnessLevel: 'Beginner',
    favoriteActivity: 'HIIT',
    team: 'Flex Force',
    joinedAt: new Date('2026-03-03'),
  },
];

const teams = [
  {
    name: 'Cardio Crew',
    city: 'Seattle',
    mascot: 'Lightning Bolt',
    motto: 'Miles make momentum',
    memberCount: 12,
  },
  {
    name: 'Iron Giants',
    city: 'Austin',
    mascot: 'Barbell',
    motto: 'Lift steady, live strong',
    memberCount: 9,
  },
  {
    name: 'Flex Force',
    city: 'Chicago',
    mascot: 'Kettlebell',
    motto: 'Move with purpose',
    memberCount: 15,
  },
];

const activities = [
  {
    username: 'alexrunner',
    type: 'Run',
    durationMinutes: 42,
    caloriesBurned: 480,
    distanceMiles: 4.8,
    activityDate: new Date('2026-09-20T07:30:00Z'),
  },
  {
    username: 'samstrength',
    type: 'Strength Training',
    durationMinutes: 55,
    caloriesBurned: 410,
    distanceMiles: 0,
    activityDate: new Date('2026-09-21T18:15:00Z'),
  },
  {
    username: 'miajumps',
    type: 'HIIT',
    durationMinutes: 28,
    caloriesBurned: 335,
    distanceMiles: 0,
    activityDate: new Date('2026-09-22T12:00:00Z'),
  },
  {
    username: 'alexrunner',
    type: 'Cycling',
    durationMinutes: 64,
    caloriesBurned: 620,
    distanceMiles: 16.2,
    activityDate: new Date('2026-09-23T06:45:00Z'),
  },
];

const leaderboard = [
  {
    rank: 1,
    username: 'alexrunner',
    team: 'Cardio Crew',
    totalPoints: 1840,
    weeklyCaloriesBurned: 1100,
  },
  {
    rank: 2,
    username: 'samstrength',
    team: 'Iron Giants',
    totalPoints: 1715,
    weeklyCaloriesBurned: 920,
  },
  {
    rank: 3,
    username: 'miajumps',
    team: 'Flex Force',
    totalPoints: 1490,
    weeklyCaloriesBurned: 780,
  },
];

const workouts = [
  {
    name: 'Morning Mobility Reset',
    category: 'Mobility',
    difficulty: 'Beginner',
    durationMinutes: 20,
    targetMuscleGroups: ['hips', 'hamstrings', 'shoulders'],
    exercises: ['World greatest stretch', 'Cat-cow', 'Hip airplanes', 'Shoulder dislocates'],
  },
  {
    name: 'Lunchtime HIIT Builder',
    category: 'Conditioning',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    targetMuscleGroups: ['legs', 'core', 'chest'],
    exercises: ['Jump squats', 'Mountain climbers', 'Push-ups', 'Plank jacks'],
  },
  {
    name: 'Progressive Strength Circuit',
    category: 'Strength',
    difficulty: 'Advanced',
    durationMinutes: 45,
    targetMuscleGroups: ['glutes', 'back', 'arms'],
    exercises: ['Deadlifts', 'Bent-over rows', 'Walking lunges', 'Farmer carries'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      Leaderboard.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
