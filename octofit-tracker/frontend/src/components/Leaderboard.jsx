import ResourceTable from './ResourceTable'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : undefined

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
      endpoint={endpoint}
      title="Leaderboard"
      description="Current standings ranked by total OctoFit performance points."
      columns={columns}
    />
  )
}

export default Leaderboard