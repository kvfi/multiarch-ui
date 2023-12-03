import {
  Anchor,
  Badge,
  ColorSwatch,
  Flex,
  HoverCard,
  Table,
  Text
} from '@mantine/core'

export const InventoryListing = ({ data }) => {
  const rows = data.map((row) => {
    return (
      <tr key={row.uuid}>
        <td>
          <Anchor size="sm" onClick={(event) => event.preventDefault()}>
            {row.name} ({row.uuid})
          </Anchor>
        </td>
        <td>{row.size}</td>
        <td>{row.status.display_name}</td>
        <td>
          <HoverCard shadow="md">
            <HoverCard.Target>
              <Badge
                variant="gradient"
                gradient={{ from: 'orange', to: 'red' }}
              >
                Upcoming feature
              </Badge>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
                Get real-time automatic market price to always know the average
                item price!
              </Text>
            </HoverCard.Dropdown>
          </HoverCard>
        </td>
        <td>{row.listing_price}</td>
        <td>{row.unrealized_profit}</td>
        <td>{row.brand.name}</td>
        <td>
          <Flex gap={10}>
            {row.colory.display_name}
            <ColorSwatch
              radius={0}
              withShadow
              style={{ display: 'inline-block' }}
              color={`#${row.colory.hex_color}`}
            />
          </Flex>
        </td>
      </tr>
    )
  })

  return (
    <Table withColumnBorders striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Status</th>
          <th>Market price</th>
          <th>Listing price</th>
          <th>Unrealised profit</th>
          <th>Brand</th>
          <th>Colory</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
