import { Col, Form, Input, Row, Select } from 'antd'
import { rowStyle } from '../../../styles'

const NewProcessDescriptionStep = ({ businessDepartments, businessDepartmentIsError }) => {
  return (
    <>
      <Row {...rowStyle}>
        <Col span={12}>
          <Form.Item rules={[{ required: true }]} label="Process Name" name="name">
            <Input />a
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Scope" name="process_owner">
            <Input />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} label="Process Owner" name="process_owner">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            required
            label="Department Owner"
            name="business_department_id"
          >
            {businessDepartmentIsError && 'An error was encountered while loading the business departments.'}
            <Select
              style={{ width: '100%' }}
              required
              options={businessDepartments.items.map((businessDepartment) => {
                return { value: businessDepartment.id, label: businessDepartment.name }
              })}
              placeholder="Select a Department"
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default NewProcessDescriptionStep
