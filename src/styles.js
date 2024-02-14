import { Divider } from 'antd'

export const contentStyle = {
  marginTop: 16
}

export const rowStyle = {
  gutter: 20
}

export const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  layout: 'vertical',
  autoComplete: 'off',
  size: 'small'
}

export const tailFormLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
  size: 'small'
}

export const Spacer = () => {
  return <Divider style={{ border: 0 }} />
}
