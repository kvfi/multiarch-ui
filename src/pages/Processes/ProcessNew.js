import { Form, Spin, Steps } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NewProcessDescriptionStep from '../../components/steps/process/NewProcessDescriptionStep'
import NewProcessInformationStep from '../../components/steps/process/NewProcessInformationStep'
import { setDescription, setTitle } from '../../ducks/site-info'
import { useGetBusinessDepartmentsQuery } from '../../services/business_departments'
import { contentStyle, formItemLayout } from '../../styles'

const ProcessNew = () => {
  const dispatch = useDispatch()
  const {
    data: businessDepartments,
    isLoading: businessDepartmentsAreLoading,
    isError: businessDepartmentIsError
  } = useGetBusinessDepartmentsQuery()
  const [currentStepNumer, setCurrentStepNumber] = useState(0)
  const [form] = Form.useForm()

  const steps = [
    {
      title: 'Process Information',
      content: <NewProcessInformationStep businessDepartments={businessDepartments} businessDepartmentisError={businessDepartmentIsError} />
    },
    {
      title: 'Process Description',
      content: <NewProcessDescriptionStep businessDepartments={businessDepartments} businessDepartmentisError={businessDepartmentIsError} />
    },
    {
      title: 'Process Boundaries'
    },
    {
      status: 'wait',
      title: 'Process Flow',
      disabled: true
    },
    {
      title: 'Control Points and Measureament',
      disabled: true
    }
  ]

  useEffect(() => {
    dispatch(setTitle('New Process'))
    dispatch(
      setDescription('Document your process from naming and assigning ownership to define the boundaries and operational definition.')
    )
  }, [])

  const onChange = (value) => {
    setCurrentStepNumber(value)
  }

  const handleOnFinish = () => {
    return
  }

  if (businessDepartmentsAreLoading) {
    return <Spin />
  }

  return (
    <Form {...formItemLayout} form={form} initialValues={{}} onFinish={handleOnFinish}>
      <Steps
        responsive
        current={currentStepNumer}
        onChange={onChange}
        items={steps.map((item) => ({
          key: item.title,
          title: item.title
        }))}
      />
      <div style={contentStyle}>{steps[currentStepNumer].content}</div>
    </Form>
  )
}

export default ProcessNew
