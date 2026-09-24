import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function ResourceTable({ resource, endpoint, title, description, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadItems() {
      try {
        setStatus('loading')
        const data = await fetchCollection(resource, endpoint)

        if (isMounted) {
          setItems(data)
          setStatus('ready')
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError instanceof Error ? requestError.message : 'Unable to load data')
          setStatus('error')
        }
      }
    }

    loadItems()

    return () => {
      isMounted = false
    }
  }, [resource, endpoint])

  return (
    <section className="resource-view">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">OctoFit data</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <span className="record-count">{items.length} records</span>
      </div>

      {status === 'loading' && <p className="state-message">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="state-message text-danger">{error}</p>}

      {status === 'ready' && (
        <div className="table-responsive resource-table-wrap">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id || item.id || JSON.stringify(item)}>
                  {columns.map((column) => (
                    <td key={column.key}>{column.render ? column.render(item) : item[column.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourceTable