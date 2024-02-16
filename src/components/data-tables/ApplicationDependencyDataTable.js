import React from 'react'
import DataTable from './DataTable'
import { APP_URLS } from '../../utils/constants'
import { Link } from 'react-router-dom'

const ApplicationDependencyDataTable = ({ data, isLoading, isError, error }) => {
  return (
    <DataTable
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      columns={[
        {
          title: 'Depends on',
          key: 'depends_on',
          render: (_, record) => <Link to={`${APP_URLS.APM_VIEWINFO}/${record.depends_on}`}>{record.depends_on}</Link>
        },
        {
          title: 'Depends on (id)',
          key: 'depends_on_id',
          dataIndex: 'depends_on_id'
        },
        {
          title: 'Type',
          key: 'type',
          dataIndex: 'class'
        },
        {
          title: 'Description',
          key: 'description',
          dataIndex: 'documentation'
        }
      ]}
    />
  )
}
export default ApplicationDependencyDataTable
