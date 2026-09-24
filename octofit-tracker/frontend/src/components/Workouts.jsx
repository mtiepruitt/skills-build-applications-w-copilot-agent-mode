import ResourceTable from './ResourceTable'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : undefined

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
      endpoint={endpoint}
      title="Workouts"
      description="Suggested training sessions across mobility, conditioning, and strength."
      columns={columns}
    />
  )
}

export default Workouts