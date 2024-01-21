import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDescription, setTitle } from '../../ducks/site-info'

import { Alert, Button, Col, DatePicker, Flex, Form, Input, Radio, Result, Row, Select, Spin } from 'antd'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router'
import { MoodSmileBeam } from 'tabler-icons-react'
import { useAddApplicationMutation } from '../../services/applications'
import { useGetBusinessDepartmentsQuery } from '../../services/business_departments'
import { useGetVendorsQuery } from '../../services/vendors'
import { APP_URLS, formLayout } from '../../utils/constants'

const { TextArea } = Input

const AppNewPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [apiDocumentationUrlIsVisible, setApiDocumentationUrlIsVisible] = useState(false)

  const {
    data: businessDepartments,
    isLoading: businessDepartmentsAreLoading,
    isError: businessDepartmentisError
  } = useGetBusinessDepartmentsQuery()
  const [vendorSearchTerms, setVendorSearchTerms] = useState()
  const { data: vendors, isLoading: vendorsAreLoading, isError: vendorsIsError, isFetching } = useGetVendorsQuery(vendorSearchTerms)
  const [
    addApplication,
    { isLoading: addApplicationIsLoading, isSuccess: addApplicationIsSuccess, isError: addApplicationIsError, error: addApplicationError }
  ] = useAddApplicationMutation()
  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(setTitle(' New Application'))
    dispatch(setDescription('Add a new application to the Application Portfolio.'))
  }, [])

  const handleApiAvailabilityChange = () => {
    const apiAvailability = form.getFieldValue('api_availability')
    setApiDocumentationUrlIsVisible(apiAvailability)
  }

  const handleVendorDebouncedSearch = debounce((searchTerm) => {
    setVendorSearchTerms({ name: searchTerm })
  }, 800)

  const handleOnFinish = (values) => {
    addApplication(values)
  }

  if (businessDepartmentsAreLoading || vendorsAreLoading || addApplicationIsLoading) {
    return <Spin />
  }

  if (addApplicationIsSuccess) {
    return (
      <Result
        icon={<MoodSmileBeam />}
        title={`Great, the application (${form.getFieldValue('name')} ${form.getFieldValue('application_code')}) was successfully added!`}
        extra={
          <Button type="primary" onClick={navigate(APP_URLS.APPLICATION_PORTFOLIO)}>
            Application Home
          </Button>
        }
      />
    )
  }

  return (
    <Form
      {...formLayout}
      form={form}
      size="small"
      initialValues={{
        last_patch_applied: false,
        api_availability: false
      }}
      onFinish={handleOnFinish}
      autoComplete="off"
    >
      {addApplicationIsError && <Alert message={addApplicationError} type="error" />}
      <Row gutter={15}>
        <Col span={12}>
          <Form.Item
            rules={[{ required: true }]}
            label="Application Code"
            name="application_code"
            help="AppCode should be 4 representative letter characters."
          >
            <Input maxLength={4} onInput={(e) => (e.target.value = e.target.value.toUpperCase())} />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Application Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Version" name="version">
            <Input placeholder="1.30.5" />
          </Form.Item>
          <Form.Item label="Release Date" name="release_date">
            <DatePicker />
          </Form.Item>
          <Form.Item label="API available?" name="api_availability">
            <Radio.Group onChange={(v) => handleApiAvailabilityChange(v)}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>False</Radio>
            </Radio.Group>
          </Form.Item>
          {apiDocumentationUrlIsVisible && (
            <Form.Item label="API Documentation URL" name="api_documentation_url">
              <Input />
            </Form.Item>
          )}
          <Form.Item label="Privacy Policy URL" name="privacy_policy_url">
            <Input />
          </Form.Item>
          <Form.Item label="Download URL" name="download_url">
            <Input />
          </Form.Item>
          <Form.Item label="Vendor Support Email" name="support_email">
            <Input />
          </Form.Item>
          <Form.Item label="Vendor Support Phone" name="support_phone">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            required
            label="Business Department"
            name="business_department_id"
            help="Select the business department this application supports."
          >
            {businessDepartmentisError && 'An error was encountered while loading the business departments.'}
            <Select
              style={{ width: '100%' }}
              required
              options={businessDepartments.items.map((businessDepartment) => {
                return { value: businessDepartment.id, label: businessDepartment.name }
              })}
              placeholder="Select a Department"
            />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Application Owner" name="application_owner">
            <Input />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} sea label="Vendor" name="vendor_id">
            {vendorsIsError && 'An error was encountered while loading the vendors list.'}
            <Select
              showSearch
              filterOption={false}
              loading={isFetching}
              onSearch={(v) => handleVendorDebouncedSearch(v)}
              notFoundContent={isFetching ? <Spin size="small" /> : null}
              options={vendors.items.map((vendor) => ({
                value: vendor.id,
                label: vendor.name
              }))}
              placeholder="Start typing the name of a vendor"
            />
          </Form.Item>
          <Form.Item label="Is the last patch applied?" name="last_patch_applied">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>False</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Installation Date" name="installation_date">
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={15}>
        <Col span={24}>
          <Form.Item labelCol={{ span: 4 }} wrapperCol={{ span: 18 }} rules={[{ required: true }]} label="Description" name="description">
            <TextArea rows={6} placeholder="A brief description of the application does and how it supports the daily business." />
          </Form.Item>
        </Col>
      </Row>
      <Flex vertical align="flex-end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  )
}

export default AppNewPage
