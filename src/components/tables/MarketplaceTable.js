import { Anchor, Table } from '@mantine/core'

export const MarketplaceTable = ({ data }) => {
  const rows = data.map((row) => {
    return (
      <tr key={row.title}>
        <td>
          <Anchor size="sm" onClick={(event) => event.preventDefault()}>
            {row.uuid}
          </Anchor>
        </td>
        <td>{row.name}</td>
      </tr>
    )
  })

  return (
    <Table withBorder>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Status</th>
          <th>Market price</th>
          <th>Unrealised profit</th>
          <th>Listing price</th>
          <th>Colory</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
