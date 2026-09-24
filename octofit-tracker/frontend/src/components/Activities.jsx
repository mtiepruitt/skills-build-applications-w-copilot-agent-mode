import ResourceTable from './ResourceTable'

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
      title="Activities"
      description="Recent workouts logged by OctoFit athletes."
      columns={columns}
    />
  )
}

export default Activities