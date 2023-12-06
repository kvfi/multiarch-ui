import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDescription, setTitle } from '../../ducks/site-info'

import { Button, Col, DatePicker, Divider, Flex, Form, Input, Radio, Row, Select, Spin, Typography } from 'antd'
import { useAddApplicationMutation } from '../../services/applications'
import { useGetBusinessDepartmentsQuery } from '../../services/business_departments'
import { useGetVendorsQuery } from '../../services/vendors'
import { formLayout } from '../../utils/constants'
import debounce from 'lodash.debounce'

const { TextArea } = Input
const { Title } = Typography

const AppNewPage = () => {
  const dispatch = useDispatch()
  const [apiDocumentationUrlIsVisible, setApiDocumentationUrlIsVisible] = useState(false)

  const {
    data: businessDepartments,
    isLoading: businessDepartmentsAreLoading,
    isError: businessDepartmentisError
  } = useGetBusinessDepartmentsQuery()
  const [vendorSearchTerms, setVendorSearchTerms] = useState()
  const {
    data: vendors,
    isLoading: vendorsAreLoading,
    isError: vendorsIsError,
    refetch,
    isFetching
  } = useGetVendorsQuery(vendorSearchTerms)
  const [addApplication] = useAddApplicationMutation()
  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(setTitle(' New Application'))
    dispatch(setDescription('Add a new application to the Application Portfolio.'))
  }, [])

  if (businessDepartmentsAreLoading || vendorsAreLoading) {
    return <Spin />
  }

  const handleApiAvailabilityChange = () => {
    const apiAvailability = form.getFieldValue('api_availability')
    setApiDocumentationUrlIsVisible(apiAvailability)
  }

  const handleSearchVendors = (v) => {
    setVendorSearchTerms({ name: v })
    return debounce(refetch, 2000)
  }

  const handleOnFinish = (values) => {
    addApplication(values)
  }

  return (
    <Form
      {...formLayout}
      form={form}
      initialValues={{
        last_patch_applied: false,
        api_availability: false
      }}
      onFinish={handleOnFinish}
      autoComplete="off"
    >
      <Title level={4}>General Information</Title>
      <Row gutter={15}>
        <Col span={12}>
          <Form.Item
            rules={[{ required: true }]}
            label="Application ID"
            name="application_id"
            help="ID should be 4 representative letter characters."
          >
            <Input maxLength={4} onInput={(e) => (e.target.value = e.target.value.toUpperCase())} />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Application Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Description" name="description">
            <TextArea rows={6} placeholder="A brief description of the application does and how it supports the daily business." />
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
              onSearch={(v) => handleSearchVendors(v)}
              notFoundContent={isFetching ? <Spin size="small" /> : null}
              options={
                vendors.total <= 10
                  ? vendors.items.map((vendor) => {
                      return { value: vendor.id, label: vendor.name }
                    })
                  : []
              }
              placeholder="Start typing the name of a vendor"
            />
          </Form.Item>
        </Col>
      </Row>
      <Divider dashed />
      <Title level={4}>Versioning and Maintenance</Title>
      <Row gutter={30}>
        <Col span={12}>
          <Form.Item rules={[{ required: true }]} label="Version" name="version">
            <Input placeholder="1.30.5" />
          </Form.Item>
          <Form.Item label="Release Date" name="release_date">
            <DatePicker />
          </Form.Item>
        </Col>
        <Col span={12}>
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
      <Divider dashed />
      <Title level={4}>Documentation and Links</Title>
      <Row gutter={30}>
        <Col span={12}>
          <Form.Item label="API available?" name="api_availability">
            <Radio.Group onChange={(v) => handleApiAvailabilityChange(v)}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>False</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            style={{ visibility: apiDocumentationUrlIsVisible ? 'visible' : 'hidden' }}
            label="API Documentation URL"
            name="api_documentation_url"
          >
            <Input />
          </Form.Item>
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
          <Form.Item label="SLA Details" name="sla_details">
            <TextArea rows={6} placeholder="Provide details on the SLA for this application." />
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
