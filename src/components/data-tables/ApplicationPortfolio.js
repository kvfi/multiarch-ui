import { Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetApplicationsWithPropertiesQuery } from '../../services/model'
import { APP_URLS } from '../../utils/constants'
import DataTable from './DataTable'
const ApplicationPortfolioDataTable = () => {
  const { data, isLoading, isError, error } = useGetApplicationsWithPropertiesQuery()


  return (
    <DataTable
      data={data}
      isLoading={isLoading}
      isEeror={isError}
      error={error}
      columns={[
        {
          title: 'App Code',
          dataIndex: ['props', 'ApplicationCode'],
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
              <Link to={`${APP_URLS.APPLICATION_PORTFOLIO_VIEWINFO}/${record.props.ApplicationCode}`}>View details</Link>
              <Link to={`${APP_URLS.APPLICATION_PORTFOLIO_CHANGE_REQUEST}/${record.id}`}>Request change</Link>
            </Space>
          )
        }
      ]}
    />
  )
}
export default ApplicationPortfolioDataTable
