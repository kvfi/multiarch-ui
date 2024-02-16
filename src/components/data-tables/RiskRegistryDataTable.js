import { Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { EditCircle, Eye, ZoomExclamation } from 'tabler-icons-react'
import { APP_URLS } from '../../utils/constants'
import TableActionButton from '../buttons/TableActionButton'
import DataTable from './DataTable'

const { Text } = Typography

const RiskRegistryDataTable = ({ data, isLoading, isError, error }) => {
  return (
    <DataTable
      data={data}
      isLoading={isLoading}
      isEeror={isError}
      error={error}
      columns={[
        {
          title: 'Reference',
          key: 'id',
          render: (_, record) => <Text copyable>R{record.id}</Text>
        },
        {
          title: 'Title',
          key: 'name',
          dataIndex: 'name'
        },
        {
          title: 'Threat event',
          key: 'threat_event',
          dataIndex: ['scenario', 'threat_event'],
        },
        {
          title: 'Vunerability',
          key: 'vunerability',
          dataIndex: ['scenario', 'vunerability']
        },
        {
          title: 'Potential impact',
          key: 'potential_impact',
          dataIndex: ['scenario', 'potential_impact']
        },
        {
          title: 'Risk owner',
          key: 'risk_owner',
          dataIndex: 'owner'
        },
        {
          title: 'SME',
          key: 'sme',
          dataIndex: 'subject_matter_expert'
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
export default RiskRegistryDataTable
