import { AutoComplete, Divider, Form, Input, Select, Slider, Spin, Upload } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Hash } from 'tabler-icons-react'
import { setDescription, setTitle } from '../../ducks/site-info'
import { useGetBusinessProcessesQuery } from '../../services/bpm'
import { tailFormLayout } from '../../styles'
import { InboxOutlined } from '@ant-design/icons'

const NewRequirement = () => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const { data: businessProcesses, isLoading: businessProcessesAreLoading } = useGetBusinessProcessesQuery()

  useEffect(() => {
    dispatch(setTitle('New Requirement Package'))
    dispatch(setDescription('Create a new requirement package'))
  }, [])

  const handleOnFinish = () => {
    return
  }

  if (businessProcessesAreLoading) {
    return <Spin />
  }

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

  return (
    <Form {...tailFormLayout} form={form} initialValues={{}} onFinish={handleOnFinish} autoComplete="off" size="large">
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Requirement description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Affected business process" name="business_process">
        <AutoComplete
          options={[
            {
              label: renderTitle('Business processes'),
              options: businessProcesses.items.map((process) => {
                return renderItem(process.name, process.id)
              })
            }
          ]}
        >
          <Input.Search placeholder="Search business processes" />
        </AutoComplete>
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Select
          popupMatchSelectWidth={false}
          options={[
            {
              label: 'Functional Requirement',
              value: 'zaeza',
              key: 'zaeza'
            },
            {
              label: 'Non-Functional Requirement',
              value: 'nfr',
              key: 'nfr'
            },
            {
              label: 'Compliance Requirements',
              value: 'eaeza'
            }
          ]}
          placeholder="Select type"
        />
      </Form.Item>
      <Form.Item label="Acceptance criteria" name="acceptance_criteria">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="priotity" label="Priority Scoring">
        <Slider
          marks={{
            0: 'Very low',
            20: 'Low',
            40: 'Normal',
            60: 'High',
            80: 'Very hight',
            100: 'Legal critical'
          }}
        />
      </Form.Item>
      <Form.Item label="Data model">
        <Form.Item name="dragger" valuePropName="fileList" noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <>
        <Divider orientation="left" plain key="Support" style={{ fontWeight: 'bold' }}>
          Non functional requirements
        </Divider>
        <Form.Item label="Description" name="desc">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Availability" name="availability">
          <Input placeholder="6 am to 6 pm Monday to Friday  " />
        </Form.Item>
        <Form.Item label="Reliability" name="reliability">
          <Input placeholder="Always on – power outages excepted" />
        </Form.Item>
        <Form.Item label="Performance" name="performance">
          <Input placeholder="3 second screen refresh after commit" />
        </Form.Item>
        <Form.Item label="Security" name="security">
          <Input placeholder="Internal use only" />
        </Form.Item>
        <Form.Item label="Archive" name="archive">
          <Input placeholder="Daily 8 pm" />
        </Form.Item>
        <Form.Item label="Recovery" name="recovery">
          <Input placeholder="3 hours" />
        </Form.Item>
        <Form.Item label="Support level" name="support_level">
          <Input placeholder="Work to completion " />
        </Form.Item>
      </>
      <Form.Item label="Status" name="status">
        <Select
          popupMatchSelectWidth={false}
          options={[
            {
              label: 'Draft',
              value: ''
            },
            {
              label: 'Reviewed',
              value: ''
            },
            {
              label: 'Approved',
              value: ''
            },
            {
              label: 'Implemented',
              value: ''
            },
            {
              label: 'Tested',
              value: ''
            },
            {
              label: 'Deferred',
              value: ''
            },
            {
              label: 'Deferred',
              value: ''
            }
          ]}
          placeholder="Select status"
        />
      </Form.Item>
    </Form>
  )
}

export default NewRequirement
