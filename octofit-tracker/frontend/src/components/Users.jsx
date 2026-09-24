import ResourceTable from './ResourceTable'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : undefined

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
      endpoint={endpoint}
      title="Users"
      description="Athlete profiles, teams, and training preferences."
      columns={columns}
    />
  )
}

export default Users