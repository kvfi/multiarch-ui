import { DownOutlined } from '@ant-design/icons'
import { Badge, Dropdown, Space, Table } from 'antd'
import React from 'react'

const RequirementsDataTable = () => {
  const items = [
    {
      key: '1',
      label: 'Action 1'
    },
    {
      key: '2',
      label: 'Action 2'
    }
  ]

  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />
      },
      {
        title: 'Upgrade Status',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum'
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown
              menu={{
                items
              }}
            >
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        )
      }
    ]
    const data = []
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i.toString(),
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      })
    }
    return <Table columns={columns} dataSource={data} pagination={false} />
  }
  const columns = [
    {
      title: 'Requirement ID',
      key: 'id',
      dataIndex: 'id'
    },
    {
      title: 'Requirement name',
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status'
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category'
    },
    {
      title: 'Priority',
      key: 'priority',
      dataIndex: 'priority'
    }
  ]
  const data = []

  for (let i = 0; i < 3; ++i) {
    data.push({
      id: 'REQ-12421454',
      name: 'Automated Report Generation Feature',
      status: 'Implemented'
    })
  }

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender,
      }}
      dataSource={data}
      size="small"
    />
  )
}
export default RequirementsDataTable
