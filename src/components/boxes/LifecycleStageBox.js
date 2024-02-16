import { Alert, Col, DatePicker, Form, Modal, Row, Select, Space, Spin, Typography } from 'antd'
import { useState } from 'react'
import { rowStyle, tailFormLayout } from '../../styles'
import { useGetLifecycleStageTypesQuery } from '../../services/eap'

const { Text, Link } = Typography

const LifecycleStageBox = ({ lifecycleStage, appCode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasFormError, setHasFormError] = useState(false)
  const [form] = Form.useForm()

  const { data, isLoading } = useGetLifecycleStageTypesQuery()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    if (!form.getFieldValue('stage_type') || !form.getFieldValue('start_date') || !form.getFieldValue('end_date')) {
      setHasFormError(true)
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleOnFinish = () => {
    return
  }

  if (isLoading) {
    return <Spin />
  }

  return (
    <>
      {lifecycleStage ? (
        <>
          <Text>{lifecycleStage.type.name}</Text>
        </>
      ) : (
        <Space>
          <Text>No Lifecycle stage defined.</Text>
          <Link onClick={showModal}>Assign now.</Link>
        </Space>
      )}
      <Modal title={`Pick a lifecycle stage for ${appCode}`} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {hasFormError && <Alert type="error" message="Please verify the entered values." style={{ marginBottom: '1rem' }} />}
        <Form {...tailFormLayout} form={form} initialValues={{}} onFinish={handleOnFinish} autoComplete="off">
          <Form.Item label="Stage type" name="stage_type" required>
            <Select
              popupMatchSelectWidth={false}
              options={data.items.map((lifecycleStageType) => {
                return { value: lifecycleStageType.id, label: lifecycleStageType.name }
              })}
              placeholder="Select type"
            />
          </Form.Item>
          <Row {...rowStyle}>
            <Col span={12}>
              <Form.Item label="Start date" name="start_date" required>
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End date" name="end_date" required>
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default LifecycleStageBox
