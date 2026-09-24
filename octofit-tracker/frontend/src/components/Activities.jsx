import ResourceTable from './ResourceTable'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : undefined

const columns = [
  { key: 'username', label: 'Athlete' },
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'distanceMiles', label: 'Miles' },
  {
    key: 'activityDate',
    label: 'Date',
    render: (activity) => new Date(activity.activityDate).toLocaleDateString(),
  },
]

function Activities() {
  return (
    <ResourceTable
      resource="activities"
      endpoint={endpoint}
      title="Activities"
      description="Recent workouts logged by OctoFit athletes."
      columns={columns}
    />
  )
}

export default Activities