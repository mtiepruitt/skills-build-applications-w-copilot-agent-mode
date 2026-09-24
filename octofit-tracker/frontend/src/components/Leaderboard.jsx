import ResourceTable from './ResourceTable'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'username', label: 'Athlete' },
  { key: 'team', label: 'Team' },
  { key: 'totalPoints', label: 'Points' },
  { key: 'weeklyCaloriesBurned', label: 'Weekly calories' },
]

function Leaderboard() {
  return (
    <ResourceTable
      resource="leaderboard"
      title="Leaderboard"
      description="Current standings ranked by total OctoFit performance points."
      columns={columns}
    />
  )
}

export default Leaderboard