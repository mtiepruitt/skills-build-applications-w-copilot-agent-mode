import ResourceTable from './ResourceTable'

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
      title="Teams"
      description="Training groups competing across the OctoFit network."
      columns={columns}
    />
  )
}

export default Teams