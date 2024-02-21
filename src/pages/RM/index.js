import { Button, Flex, Form, Input, Modal, Space } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDescription, setTitle } from '../../ducks/site-info'
import { Spacer, formItemLayout } from '../../styles'
import RequirementsDataTable from '../../components/data-tables/RequirementsDataTable'
import { useNavigate } from 'react-router-dom'
import { APP_URLS } from '../../utils/constants'

const RequirementsRepositoryHome = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [createNewPackageRequirementModelIsOpen, setCreateNewPackageRequirementModelIsOpen] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(setTitle('Requirements Management'))
    dispatch(
      setDescription(
        'Identify, document, prioritize, and track \
        the evolving requirements of a project or system, \
        ensuring they are met throughout the project lifecycle.\
         This page may also cover tools and best practices for effective requirements management.'
      )
    )
  }, [])

  const handleOk = () => {
    setCreateNewPackageRequirementModelIsOpen(false)
  }
  const handleCancel = () => {
    setCreateNewPackageRequirementModelIsOpen(false)
  }

  return (
    <>
      <Flex justify="flex-end" align="flex-end">
        <Space.Compact>
          <Button type="primary" onClick={() => setCreateNewPackageRequirementModelIsOpen(true)}>
            Create requirement package
          </Button>
          <Button type="primary" onClick={() => navigate(APP_URLS.RM.NEW_REQUIREMENT)}>
            New requirement
          </Button>
        </Space.Compact>
      </Flex>
      <Spacer />
      <RequirementsDataTable />
      <Modal open={createNewPackageRequirementModelIsOpen} onOk={handleOk} onCancel={handleCancel} title="Create requirement package">
        <Form {...formItemLayout} form={form} initialValues={{}}>
          <Form.Item rules={[{ required: true }]} label="Package name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Project ID" name="project_id">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default RequirementsRepositoryHome
