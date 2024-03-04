import { Divider } from 'antd'

export const contentStyle = {
  marginTop: 16
}

export const rowStyle = {
  gutter: 20
}

export const colStyle = {
  xs: 24,
  sd: 24,
  md: 24,
  xl: 12,
  xxl: 12
}

export const colStyleSearch = {
  ...colStyle
}

export const formLayout = {
  autoComplete: 'off',
  size: 'small'
}

export const formItemLayout = {
  ...formLayout,
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  layout: 'vertical'
}

export const tailFormLayout = {
  ...formLayout,
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
  colon: false
}

export const Spacer = () => {
  return <Divider style={{ border: 0 }} />
}
