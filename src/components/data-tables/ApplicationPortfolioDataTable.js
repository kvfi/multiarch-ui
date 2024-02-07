import React from 'react'
import { Link } from 'react-router-dom'
import { EditCircle, Eye, ZoomExclamation } from 'tabler-icons-react'
import { useGetApplicationsWithPropertiesQuery } from '../../services/model'
import { APP_URLS } from '../../utils/constants'
import TableActionButton from '../buttons/TableActionButton'
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
            <TableActionButton
              items={[
                {
                  label: <Link to={`${APP_URLS.APM_VIEWINFO}/${record.props.ApplicationCode}`}>View details</Link>,
                  key: 'view',
                  icon: <Eye />
                },
                {
                  label: <Link to={`${APP_URLS.APM_CHANGE_REQUEST}/${record.props.ApplicationCode}`}>Request change</Link>,
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
