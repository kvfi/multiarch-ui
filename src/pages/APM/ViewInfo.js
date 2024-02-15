import { useDispatch } from 'react-redux'

import { AutoComplete, Col, Descriptions, Divider, Form, Input, Row, Select, Spin, Tabs } from 'antd'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Hash } from 'tabler-icons-react'
import { setDescription, setTitle } from '../../ducks/site-info'
import { useGetApplicationStatusesQuery } from '../../services/applications'
import { useGetBusinessProcessesQuery } from '../../services/bpm'
import { useGetApplicationsWithPropertiesByAppCodeQuery } from '../../services/model'
import { rowStyle, tailFormLayout } from '../../styles'
import LifecycleStageBox from '../../components/boxes/LifecycleStageBox'

const AppViewInfo = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  let { appCode } = useParams()
  const { data, isLoading } = useGetApplicationsWithPropertiesByAppCodeQuery(appCode)

  const {
    data: applicationStatuses,
    isLoading: applicationStatusesAreLoading,
    isFetching: applicationStatusesAreFetching
  } = useGetApplicationStatusesQuery()

  const /*fetchBusinessProcesses,*/
    {
      data: businessProcesses,
      isLoading: businessProcessesAreLoading,
      isFetching: businessProcessesAreFetching
    } = useGetBusinessProcessesQuery()

  useEffect(() => {
    dispatch(setTitle(`View Application Information: ${appCode}`))
    dispatch(
      setDescription(
        // eslint-disable-next-line max-len
        'AppViewer provides detailed information about the application you are looking for.'
      )
    )
  }, [])

  const renderTitle = (title) => (
    <span>
      {title}
      <a
        style={{
          float: 'left'
        }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </span>
  )
  const renderItem = (title, count) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {title}
        <span>
          <Hash size={9} /> {count}
        </span>
      </div>
    )
  })

  const handleBusinessProcessOnKeyUp = () => {
    alert('aaa')
  }

  const handleOnFinish = () => {
    return
  }

  if (
    isLoading ||
    applicationStatusesAreLoading ||
    applicationStatusesAreFetching ||
    businessProcessesAreLoading ||
    businessProcessesAreFetching
  )
    return <Spin />

  return (
    <Tabs
      defaultActiveKey="profile"
      type="card"
      items={[
        {
          label: 'Profile',
          key: 'profile',
          children: (
            <Form
              {...tailFormLayout}
              form={form}
              initialValues={{
                name: data.props.Name,
                include_external_apps: true
              }}
              onFinish={handleOnFinish}
              autoComplete="off"
            >
              <Row {...rowStyle}>
                <Col span={12}>
                  <Form.Item label="Business process" name="business_process">
                    <AutoComplete
                      options={[
                        {
                          label: renderTitle('Business processes'),
                          options: businessProcesses.items.map((process) => {
                            return renderItem(process.name, process.id)
                          })
                        }
                      ]}
                      onKeyUp={handleBusinessProcessOnKeyUp}
                    >
                      <Input.Search placeholder="Search business processes" />
                    </AutoComplete>
                  </Form.Item>
                  <Form.Item label="Name" name="name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Status" name="status">
                    <Select
                      popupMatchSelectWidth={false}
                      options={applicationStatuses.items.map((status) => {
                        return { value: status.id, label: status.name }
                      })}
                      placeholder="Select status"
                    />
                  </Form.Item>
                  <Form.Item label="Life Cycle Stage" name="lifecycle_stage">
                    <LifecycleStageBox lifecycleStage={data?.lifecycleStage} />
                  </Form.Item>
                </Col>
                <Descriptions
                  layout="vertical"
                  labelStyle={{ fontWeight: 'bold' }}
                  items={[
                    {
                      key: 'name',
                      label: 'Name',
                      children: data.props?.Name,
                      span: 2
                    },
                    {
                      key: 'Status',
                      label: 'Status',
                      children: data.props?.Status,
                      span: 2
                    },
                    {
                      key: 'documentation',
                      label: 'Description',
                      children: data.documentation,
                      span: 3
                    },
                    {
                      key: 'portfolio',
                      label: 'Porfolio',
                      children: data.props?.Portfolio
                    },
                    {
                      key: 'application_type',
                      label: 'Application type',
                      children: data.props?.Type
                    },
                    {
                      key: 'architecture_type',
                      label: 'Architecture type',
                      children: data.props?.ArchitectureType
                    },
                    {
                      key: 'install_type',
                      label: 'Install type',
                      children: data.props?.InstallType
                    },
                    {
                      key: 'Platform',
                      label: 'Platform',
                      children: data.props?.Platform
                    },
                    {
                      key: 'business_unit',
                      label: 'Business unit',
                      children: data.props?.BusinessUnit
                    },
                    {
                      key: 'department',
                      label: 'Department',
                      children: data.props?.Department
                    },
                    {
                      key: 'status',
                      label: 'Status',
                      children: data.props?.Status
                    },
                    {
                      key: 'scoring',
                      label: 'Scoring',
                      children: data.props?.Scoring
                    },
                    {
                      key: 'application_category',
                      label: 'Application category',
                      children: data.props?.ApplicationCategory
                    },
                    {
                      key: 'application_family',
                      label: 'Application family',
                      children: data.props?.ApplicationFamily
                    },
                    {
                      key: 'technology_stack',
                      label: 'Technology stack',
                      children: data.props?.TechnologyStack
                    },
                    {
                      key: 'user_base',
                      label: 'User base',
                      children: data.props?.TechnologyStack
                    }
                  ]}
                />
                <Divider orientation="left" plain key="risks" style={{ fontWeight: 'bold' }}>
                  Risks
                </Divider>
              </Row>
            </Form>
          )
        },
        {
          label: 'Properties',
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
