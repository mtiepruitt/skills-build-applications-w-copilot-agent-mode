import ResourceTable from './ResourceTable'

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'team', label: 'Team' },
  { key: 'fitnessLevel', label: 'Level' },
  { key: 'favoriteActivity', label: 'Favorite activity' },
]

function Users() {
  return (
    <ResourceTable
      resource="users"
      title="Users"
      description="Athlete profiles, teams, and training preferences."
      columns={columns}
    />
  )
}

export default Users