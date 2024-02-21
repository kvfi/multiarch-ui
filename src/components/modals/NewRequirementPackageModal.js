import { Form, Input, Modal, Select } from 'antd'
import { formItemLayout } from '../../styles'

const { Option } = Select

const NewRequirementPackageModal = ({ isOpen }) => {
  const [form] = Form.useForm()

  return (
    <Modal open={isOpen} title="Are you sure to logout?">
      <Form {...formItemLayout} form={form} initialValues={{}}>
        <Form.Item rules={[{ required: true }]} label="Package name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Project ID" name="project_id">
          <Input
            addonBefore={
              <Select defaultValue="confluence_id">
                <Option value="confluence_id">Confluence</Option>
                <Option value="to_id">TO</Option>
              </Select>
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewRequirementPackageModal
