import ResourceTable from './ResourceTable'

const columns = [
  { key: 'name', label: 'Workout' },
  { key: 'category', label: 'Category' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  {
    key: 'targetMuscleGroups',
    label: 'Focus',
    render: (workout) => workout.targetMuscleGroups?.join(', ') || '',
  },
]

function Workouts() {
  return (
    <ResourceTable
      resource="workouts"
      title="Workouts"
      description="Suggested training sessions across mobility, conditioning, and strength."
      columns={columns}
    />
  )
}

export default Workouts