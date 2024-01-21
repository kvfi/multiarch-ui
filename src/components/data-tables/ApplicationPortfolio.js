import React from 'react'
import DataTable from './DataTable'
import { useGetApplicationsQuery } from '../../services/applications'
import { Space } from 'antd'
import { APP_URLS } from '../../utils/constants'
import { Link } from 'react-router-dom'
const ApplicationPortfolioDataTable = () => {
  const { data, isLoading, isError, error } = useGetApplicationsQuery()

  return (
    <DataTable
      data={data}
      isLoading={isLoading}
      isEeror={isError}
      error={error}
      columns={[
        {
          title: 'App Code',
          dataIndex: 'application_code',
          key: 'application_code'
        },
        {
          title: 'App Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description'
        },
        {
          title: 'Business supporting',
          dataIndex: 'business_department',
          key: 'business_department'
        },
        {
          title: 'Application Type',
          dataIndex: 'application_type',
          key: 'application_type'
        },
        {
          title: 'Application Type',
          dataIndex: 'application_type',
          key: 'application_type'
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Link to={`${APP_URLS.APPLICATION_PORTFOLIO_INFO}${record.application_code}`}>View details</Link>
              <Link to={`${APP_URLS.APPLICATION_PORTFOLIO_CHANGE_REQUEST}${record.application_code}`}>Request change</Link>
            </Space>
          ),
        }
      ]}
    />
  )
}
export default ApplicationPortfolioDataTable
