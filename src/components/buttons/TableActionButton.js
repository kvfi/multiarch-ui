import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Space } from 'antd'

const TableActionButton = ({ items }) => {
  return (
    <Dropdown
      menu={{
        items
      }}
    >
      <Button size="small">
        <Space>
          Action
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}

export default TableActionButton
