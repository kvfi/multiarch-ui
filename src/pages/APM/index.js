import { Card, Col, Divider, Row, Space, Spin, Statistic } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppWindow, Briefcase, HeartHandshake, ManualGearbox } from 'tabler-icons-react'
import { setDescription, setTitle } from '../../ducks/site-info'
import { useGetApplicationsWithPropertiesQuery, useGetBusinessCapabilitiesQuery } from '../../services/model'
import { Spacer, rowStyle } from '../../styles'

// const { Title } = Typography

const ApplicationPortfolioHome = () => {
  const dispatch = useDispatch()
  /* const navigatate = useNavigate()

  const {
    data: applicationStatuses,
    isLoading: applicationStatusesAreLoading,
    isError: applicationStatusesIsError,
    isFetching: applicationStatusesAreFetching
  } = useGetApplicationStatusesQuery()

  const {
    data: applicationCriticalities,
    isLoading: applicationCriticalitiesAreLoading,
    isError: applicationCriticalitiesIsError,
    isFetching: applicationCriticalitiesAreFetching
  } = useGetApplicationCriticalitiesQuery()


  const {
    data: applicationTypes,
    isLoading: applicationTypesAreLoading,
    isError: applicationTypesIsError,
    isFetching: applicationTypesAreFetching
  } = useGetApplicationTypesQuery()

  const [form] = Form.useForm() */

  const { data: capabilities, isLoading: capabilitiesAreLoading, isFetching: capabilitiesAreFetching } = useGetBusinessCapabilitiesQuery()
  const {
    data: applications,
    isLoading: applicationsAreLoading,
    isFetching: applicationsAreFetching
  } = useGetApplicationsWithPropertiesQuery()

  useEffect(() => {
    dispatch(setTitle('Application Portfolio'))
    dispatch(
      setDescription(
        // eslint-disable-next-line max-len
        'The application portfolio page is a comprehensive resource dedicated to showcasing the diverse range of software applications used at Multipharma. It includes detailed information about each application, such as its purpose, the business processes it supports, its technical specifications, and its integration with other systems in the portfolio.'
      )
    )
  }, [])

  /*  if (
    applicationStatusesAreLoading ||
    applicationStatusesAreFetching ||
    applicationCriticalitiesAreLoading ||
    applicationCriticalitiesAreFetching ||
    applicationTypesAreLoading ||
    applicationTypesAreFetching
  ) {
    return <Spin />
  } */

  if (capabilitiesAreLoading || capabilitiesAreFetching || applicationsAreLoading || applicationsAreFetching) {
    return <Spin />
  }

  return (
    <>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: 'flex'
        }}
      >
        {/* <Flex justify="flex-end" align="flex-end">
          <Space.Compact>
            <Button type="primary" onClick={() => navigatate(APP_URLS.APPLICATION_PORTFOLIO_NEW_APP)}>
              New Application
            </Button>
            <Button type="primary">Application Landscape</Button>
            <Button type="primary">Start Assessment</Button>
          </Space.Compact>
        </Flex>
        <Title level={5}>Search</Title>
        <Form
          form={form}
          size="small"
          layout="inline"
          initialValues={{
            application_code: '',
            name: '',
            include_external_apps: true
          }}
          onFinish={handleOnFinish}
          autoComplete="off"
        >
          <Form.Item label="AppCode" name="application_code">
            <Input maxLength={4} onInput={(e) => (e.target.value = e.target.value.toUpperCase())} />
          </Form.Item>
          <Form.Item label="Include external apps" name="include_external_apps" valuePropName="checked">
            <Checkbox></Checkbox>
          </Form.Item>
          {applicationStatusesIsError && 'An error was encountered while loading the application statuses.'}
          <Form.Item label="Status" name="status">
            <Select
              popupMatchSelectWidth={false}
              style={{ width: 200 }}
              options={applicationStatuses.items.map((status) => {
                return { value: status.id, label: status.name }
              })}
              placeholder="Select status"
            />
          </Form.Item>
          {applicationCriticalitiesIsError && 'An error was encountered while loading the application criticalities.'}
          <Form.Item label="Criticality" name="criticality">
            <Select
              popupMatchSelectWidth={false}
              style={{ width: 200 }}
              options={applicationCriticalities.items.map((criticality) => {
                return { value: criticality.id, label: criticality.name }
              })}
              placeholder="Select criticality"
            />
          </Form.Item>
          {applicationTypesIsError && 'An error was encountered while loading the application types.'}
          <Form.Item label="Type" name="type">
            <Select
              popupMatchSelectWidth={false}
              style={{ width: 200 }}
              options={applicationTypes.items.map((type) => {
                return { value: type.id, label: type.name }
              })}
              placeholder="Select type"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> */}
        <Row>
          <Col span={24}>
            <Card>
              <Card.Meta title="Opportunities" avatar={<HeartHandshake />} />
              <Divider />
            </Card>
          </Col>
        </Row>

        <Row {...rowStyle}>
          <Col span={8}>
            <Card>
              <Card.Meta title="Business Architecture" avatar={<Briefcase />} />
              <Divider />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="Capabilities" value={capabilities.length} />
                </Col>
                <Col span={12}>
                  <Statistic title="Assessed" value={0} />
                </Col>
              </Row>
              <Spacer />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="Capabilities" value={capabilities.length} />
                </Col>
                <Col span={12}>
                  <Statistic title="Assessed" value={0} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Card.Meta title="Application Architecture" avatar={<AppWindow />} />
              <Divider />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="No. of Applications" value={applications.length} />
                </Col>
                <Col span={12}>
                  <Statistic title="My Applications" value={0} />
                </Col>
              </Row>
              <Spacer />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="COTS" value="?" />
                </Col>
                <Col span={12}>
                  <Statistic title="Homegrown" value={0} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Card.Meta title="Technology Architecture" avatar={<ManualGearbox />} />
              <Col span={12}>
                  <Statistic title="No. of Technologies" value="?" />
                </Col>
                <Col span={12}>
                  <Statistic title="Homegrown" value={0} />
                </Col>
            </Card>
          </Col>
        </Row>
      </Space>
    </>
  )
}

export default ApplicationPortfolioHome
