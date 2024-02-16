import { useDispatch } from 'react-redux'

import { DashboardFilled, SettingFilled, SlidersFilled, WarningFilled } from '@ant-design/icons'
import { AutoComplete, Col, Divider, Form, Input, Row, Select, Spin, Tabs } from 'antd'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Hash } from 'tabler-icons-react'
import LifecycleStageBox from '../../components/boxes/LifecycleStageBox'
import ApplicationDependencyDataTable from '../../components/data-tables/ApplicationDependencyDataTable'
import RiskRegistryDataTable from '../../components/data-tables/RiskRegistryDataTable'
import { setDescription, setTitle } from '../../ducks/site-info'
import {
  useGetApplicationArchitectureTypesQuery,
  useGetApplicationCategoriesQuery,
  useGetApplicationFamiliesQuery,
  useGetApplicationInstallTypesQuery,
  useGetApplicationSourcingStrategiesQuery,
  useGetApplicationStatusesQuery,
  useGetApplicationTypesQuery
} from '../../services/applications'
import { useGetBusinessProcessesQuery } from '../../services/bpm'
import { useGetPlatformsQuery, useGetTechnologiesQuery } from '../../services/eap'
import { useGetRisksQuery } from '../../services/irm'
import { useGetApplicationsWithPropertiesByAppCodeQuery, useLazyGetApplicationDependenciesQuery } from '../../services/model'
import { rowStyle, tailFormLayout } from '../../styles'

const AppViewInfo = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  let { appCode } = useParams()
  const { data, isLoading } = useGetApplicationsWithPropertiesByAppCodeQuery(appCode)
  const { data: applicationTypes, applicationTypesIsLoading } = useGetApplicationTypesQuery()
  const { data: sourcingStrategies, sourcingStrategiesIsLoading } = useGetApplicationSourcingStrategiesQuery()
  const { data: architectureTypes, architectureTypeIsLoading } = useGetApplicationArchitectureTypesQuery()
  const { data: installTypes, installTypeIsLoading } = useGetApplicationInstallTypesQuery()
  const { data: categories, categoriesIsLoading } = useGetApplicationCategoriesQuery()
  const { data: platforms, platformsIsLoading } = useGetPlatformsQuery()
  const { data: families, familiesIsLoading } = useGetApplicationFamiliesQuery()
  const { data: technologies, technologiesIsLoading } = useGetTechnologiesQuery()
  const { data: risks, risksIsLoading } = useGetRisksQuery()
  const [getApplicationDependencies, { data: applicationDependencies, applicationDependenciesIsLoading }] =
    useLazyGetApplicationDependenciesQuery()

  const {
    data: applicationStatuses,
    isLoading: applicationStatusesAreLoading,
    isFetching: applicationStatusesAreFetching
  } = useGetApplicationStatusesQuery()

  const {
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

  useEffect(() => {
    getApplicationDependencies(data?.id)
  }, [data?.id])

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
    businessProcessesAreFetching ||
    applicationTypesIsLoading ||
    sourcingStrategiesIsLoading ||
    architectureTypeIsLoading ||
    installTypeIsLoading ||
    categoriesIsLoading ||
    platformsIsLoading ||
    familiesIsLoading ||
    technologiesIsLoading ||
    applicationDependenciesIsLoading
  )
    return <Spin />

  return (
    <Tabs
      defaultActiveKey="overview"
      items={[
        {
          label: 'Overview',
          key: 'overview',
          icon: <DashboardFilled />,
          children: (
            <Form
              {...tailFormLayout}
              form={form}
              initialValues={{
                name: data.props.Name,
                model_id: data.id,
                include_external_apps: true
              }}
              onFinish={handleOnFinish}
              autoComplete="off"
            >
              <Row {...rowStyle}>
                <Col span={12}>
                  <Form.Item label="Name" name="name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Model ID" name="model_id">
                    <Input disabled />
                  </Form.Item>
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
                  <Form.Item label="Application type" name="type">
                    <Select
                      popupMatchSelectWidth={false}
                      options={applicationTypes.items.map((type) => {
                        return { value: type.id, label: type.name }
                      })}
                      placeholder="Select type"
                    />
                  </Form.Item>
                  <Form.Item label="Architecture type" name="architecture_type_id">
                    <Select
                      popupMatchSelectWidth={false}
                      options={architectureTypes.items.map((architectureType) => {
                        return { value: architectureType.id, label: architectureType.name }
                      })}
                      placeholder="Select architecture type"
                    />
                  </Form.Item>
                  <Form.Item label="Install type" name="install_type_id">
                    <Select
                      popupMatchSelectWidth={false}
                      options={installTypes.items.map((installType) => {
                        return { value: installType.id, label: installType.name }
                      })}
                      placeholder="Select install type"
                    />
                  </Form.Item>
                  <Form.Item label="Applicaton category" name="category_id">
                    <Select
                      popupMatchSelectWidth={false}
                      options={categories.items.map((category) => {
                        return { value: category.id, label: category.name }
                      })}
                      placeholder="Select category"
                    />
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
                    <LifecycleStageBox lifecycleStage={data?.lifecycleStage} appCode={appCode} />
                  </Form.Item>
                  <Form.Item label="Sourcing strategy" name="sourcing_strategy_id">
                    <Select
                      popupMatchSelectWidth={false}
                      options={sourcingStrategies.items.map((sourcingStrategy) => {
                        return { value: sourcingStrategy.id, label: sourcingStrategy.name }
                      })}
                      placeholder="Select sourcing strategy"
                    />
                  </Form.Item>
                  <Form.Item label="Application familiy" name="family_id">
                    <Select
                      popupMatchSelectWidth={false}
                      options={families.items.map((family) => {
                        return { value: family.id, label: family.name }
                      })}
                      placeholder="Select family"
                    />
                  </Form.Item>
                  <Form.Item label="Platform" name="platform_id">
                    <Select
                      popupMatchSelectWidth={false}
                      options={platforms.items.map((platform) => {
                        return { value: platform.id, label: platform.name }
                      })}
                      placeholder="Select platform"
                    />
                  </Form.Item>
                  <Form.Item label="Technoly Stack" name="technology_id">
                    <Select
                      popupMatchSelectWidth={false}
                      options={technologies.items.map((technology) => {
                        return { value: technology.id, label: technology.name }
                      })}
                      placeholder="Select technology stack"
                    />
                  </Form.Item>
                </Col>
                <Form.Item label="Documentation" name="documentation" style={{ width: '100%' }}>
                  <Input.TextArea disabled />
                </Form.Item>
                <Divider orientation="left" plain key="Ownership" style={{ fontWeight: 'bold' }}></Divider>
                <Divider orientation="left" plain key="Support" style={{ fontWeight: 'bold' }}></Divider>
              </Row>
            </Form>
          )
        },
        {
          label: 'Associated Risks',
          key: 'risks',
          icon: <WarningFilled />,
          children: <RiskRegistryDataTable data={risks.items} isLoading={risksIsLoading} isError={false} error={[]} />
        },
        {
          label: 'Dependencies',
          key: 'dependencies',
          icon: <SlidersFilled />,
          children: (
            <ApplicationDependencyDataTable
              data={applicationDependencies}
              isLoading={applicationDependenciesIsLoading}
              isError={false}
              error={[]}
            />
          )
        },
        {
          label: 'Properties',
          key: 'props',
          icon: <SettingFilled />,
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
