import { Col, DatePicker, Form, Modal, Row, Select, Space, Spin, Typography } from 'antd'
import { useState } from 'react'
import { rowStyle, tailFormLayout } from '../../styles'
import { useGetLifecycleStageTypesQuery } from '../../services/eap'

const { Text, Link } = Typography

const LifecycleStageBox = ({ lifecycleStage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()

  const { data, isLoading } = useGetLifecycleStageTypesQuery()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
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
        <Space align="end">
          <Text>No Lifecycle stage defined.</Text>
          <Link onClick={showModal}>Assign now.</Link>
        </Space>
      )}
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
          <Form.Item label="Stage type" name="stage_type">
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
              <Form.Item label="Start date" name="start_date">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="End date" name="end_date">
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
