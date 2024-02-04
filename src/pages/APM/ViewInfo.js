import { useDispatch } from 'react-redux'

import { Descriptions, Spin, Tabs } from 'antd'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { setDescription, setTitle } from '../../ducks/site-info'
import { useGetApplicationsWithPropertiesByAppCodeQuery } from '../../services/model'

const AppViewInfo = () => {
  const dispatch = useDispatch()
  let { appCode } = useParams()
  const { data, isLoading } = useGetApplicationsWithPropertiesByAppCodeQuery(appCode)
  
  useEffect(() => {
    dispatch(setTitle(`View Application Information: ${appCode}`))
    dispatch(
      setDescription(
        // eslint-disable-next-line max-len
        'AppViewer provides detailed information about the application you are looking for.'
      )
    )
  }, [])

  if (isLoading) return <Spin />

  return (
    <Tabs
      defaultActiveKey="profile"
      type="card"
      size="large"
      items={[
        {
          label: `Application Profile`,
          key: 'profile',
          children: (
            <Descriptions
              labelStyle={{ fontWeight: 'bold' }}
              items={[
                {
                  key: 'name',
                  label: 'Name',
                  children: data.props?.ApplicationName,
                  span: 2
                },
                {
                  key: 'documentation',
                  label: 'Description',
                  children: data.documentation,
                  span: 2
                },
                {
                  key: 'portfolio',
                  label: 'Porfolio',
                  children: data.props?.Portfolio,
                  span: 2
                },
                {
                  key: 'application_type',
                  label: 'Application type',
                  children: data.props?.ApplicationType,
                  span: 2
                },
                {
                  key: 'architecture_type',
                  label: 'Architecture type',
                  children: data.props?.ArchitectureType,
                  span: 2
                },
                {
                  key: 'install_type',
                  label: 'Install type',
                  children: data.props?.InstallType,
                  span: 2
                },
                {
                  key: 'Platform',
                  label: 'Platform',
                  children: data.props?.Platform,
                  span: 2
                },
                {
                  key: 'business_unit',
                  label: 'Business unit',
                  children: data.props?.BusinessUnit,
                  span: 2
                },
                {
                  key: 'department',
                  label: 'Department',
                  children: data.props?.Department,
                  span: 2
                },
                {
                  key: 'status',
                  label: 'Status',
                  children: data.props?.Status,
                  span: 2
                },
                {
                  key: 'scoring',
                  label: 'Scoring',
                  children: data.props?.Scoring,
                  span: 2
                },
                {
                  key: 'application_category',
                  label: 'Application category',
                  children: data.props?.ApplicationCategory,
                  span: 2
                },
                {
                  key: 'application_family',
                  label: 'Application family',
                  children: data.props?.ApplicationFamily,
                  span: 2
                },
                {
                  key: 'technology_stack',
                  label: 'Technology stack',
                  children: data.props?.TechnologyStack,
                  span: 2
                },
                {
                  key: 'user_base',
                  label: 'User base',
                  children: data.props?.TechnologyStack,
                  span: 2
                }
              ]}
            />
          )
        },
        {
          label: `Properties`,
          key: 'props',
          children: (
            <SyntaxHighlighter language="json" style={docco}>
              {JSON.stringify(data.props, null, 2)}
            </SyntaxHighlighter>
          )
        }
      ]}
    />
  )
}

export default AppViewInfo
