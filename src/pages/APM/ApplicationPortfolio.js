import { Button, Checkbox, Flex, Form, Input, Select, Space, Spin, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ApplicationPortfolioDataTable from '../../components/data-tables/ApplicationPortfolioDataTable'
import { setDescription, setTitle } from '../../ducks/site-info'
import {
  useGetApplicationCriticalitiesQuery,
  useGetApplicationStatusesQuery,
  useGetApplicationTypesQuery
} from '../../services/applications'
import { useLazyGetApplicationsWithPropertiesQuery } from '../../services/model'
import { APP_URLS } from '../../utils/constants'

const { Title } = Typography

const ApplicationPortfolio = () => {
  const dispatch = useDispatch()
  const navigatate = useNavigate()
  const [form] = Form.useForm()

  const [searchApplications, { data, isLoading, isError, error }] = useLazyGetApplicationsWithPropertiesQuery()

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

  useEffect(() => {
    dispatch(setTitle('Application Portfolio Management'))
    dispatch(
      setDescription(
        // eslint-disable-next-line max-len
        'The application portfolio management is a comprehensive resource dedicated to showcasing the diverse range of software applications used at Multipharma. It includes detailed information about each application, such as its purpose, the business processes it supports, its technical specifications, and its integration with other systems in the portfolio.'
      )
    )
  }, [])

  const handleOnFinish = () => {
    searchApplications({ 'props->>Code': `like.${form.getFieldValue('code')}*` })
  }

  if (
    applicationStatusesAreLoading ||
    applicationStatusesAreFetching ||
    applicationCriticalitiesAreLoading ||
    applicationCriticalitiesAreFetching ||
    applicationTypesAreLoading ||
    applicationTypesAreFetching
  ) {
    return <Spin />
  }

  return (
    <>
      <Flex justify="flex-end" align="flex-end">
        <Space.Compact>
          <Button type="primary" onClick={() => navigatate(APP_URLS.APM_NEW_APP)}>
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
        layout="vertical"
        initialValues={{
          application_code: '',
          name: '',
          include_external_apps: true
        }}
        onFinish={handleOnFinish}
        autoComplete="off"
      >
        <Flex gap="small" align="flex-end">
          <Form.Item label="Application Code" name="code">
            <Input maxLength={4} onInput={(e) => (e.target.value = e.target.value.toUpperCase())} />
          </Form.Item>
          {applicationStatusesIsError && 'An error was encountered while loading the application statuses.'}
          <Form.Item label="Status" name="status">
            <Select
              mode="multiple"
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
          <Form.Item label="Include external apps" name="include_external_apps" valuePropName="checked">
            <Checkbox></Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Flex>
      </Form>
      <ApplicationPortfolioDataTable data={data} isLoading={isLoading} isError={isError} error={error} />
    </>
  )
}

export default ApplicationPortfolio
