import { Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { EditCircle, Eye, ZoomExclamation } from 'tabler-icons-react'
import { APP_URLS } from '../../utils/constants'
import TableActionButton from '../buttons/TableActionButton'
import DataTable from './DataTable'

const { Text } = Typography

const ApplicationPortfolioDataTable = ({ data, isLoading, isError, error }) => {
  return (
    <DataTable
      data={data}
      isLoading={isLoading}
      isEeror={isError}
      error={error}
      columns={[
        {
          title: 'App Code',
          key: 'code',
          render: (_, record) => <Text copyable>{record.props?.Code}</Text>
        },
        {
          title: 'App Name',
          dataIndex: ['props', 'Name'],
          key: 'name'
        },
        {
          title: 'Business supporting',
          dataIndex: ['props', 'BusinessDepartment'],
          key: 'business_department'
        },
        {
          title: 'Application Type',
          dataIndex: ['props', 'Type'],
          key: 'application_type'
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <TableActionButton
              items={[
                {
                  label: <Link to={`${APP_URLS.APM_VIEWINFO}/${record.props.Code}`}>View details</Link>,
                  key: 'view',
                  icon: <Eye />
                },
                {
                  label: <Link to={`${APP_URLS.APM_CHANGE_REQUEST}/${record.props.Code}`}>Request change</Link>,
                  key: 'change',
                  icon: <EditCircle />
                },
                {
                  label: 'View associated risks',
                  key: 'risks',
                  icon: <ZoomExclamation />
                }
              ]}
            />
          )
        }
      ]}
    />
  )
}
export default ApplicationPortfolioDataTable
