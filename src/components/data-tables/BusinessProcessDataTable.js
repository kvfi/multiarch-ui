import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Eye, ZoomExclamation } from 'tabler-icons-react'
import { useGetBusinessProcessesQuery } from '../../services/bpm'
import DataTable from './DataTable'
import { APP_URLS } from '../../utils/constants'

const BusinessProcessDataTable = () => {
  const { data, isLoading, isError, error } = useGetBusinessProcessesQuery()

  const items = [
    {
      label: <Link to={APP_URLS.BPM_PROCESSES}>View details</Link>,
      key: 'view',
      icon: <Eye />
    },
    {
      label: 'View associated risks',
      key: 'risks',
      icon: <ZoomExclamation />
    }
  ]
  const menuProps = {
    items
  }

  return (
    <DataTable
      data={data}
      isLoading={isLoading}
      isEeror={isError}
      error={error}
      columns={[
        {
          title: 'Process ID',
          dataIndex: 'id',
          key: 'id',
          render: (_, { id }) => <>BP-{id}</>
        },
        {
          title: 'Title',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (_, record) => record?.status?.name
        },
        {
          title: 'Impact',
          dataIndex: 'impact',
          key: 'impact'
        },
        {
          title: 'Action',
          key: 'action',
          render: () => {
            return (
              <Dropdown menu={menuProps}>
                <Button size='small'>
                  <Space>
                    Action
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            )
          }
        }
      ]}
    />
  )
}
export default BusinessProcessDataTable
