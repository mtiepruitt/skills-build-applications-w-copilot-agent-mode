import ResourceTable from './ResourceTable'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : undefined

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'city', label: 'City' },
  { key: 'mascot', label: 'Mascot' },
  { key: 'motto', label: 'Motto' },
  { key: 'memberCount', label: 'Members' },
]

function Teams() {
  return (
    <ResourceTable
      resource="teams"
      endpoint={endpoint}
      title="Teams"
      description="Training groups competing across the OctoFit network."
      columns={columns}
    />
  )
}

export default Teams