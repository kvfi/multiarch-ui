import { Alert, Spin, Table } from 'antd'

const DataTable = ({ data, isLoading, isError, error, columns }) => {
  if (isLoading) {
    return <Spin />
  }

  if (isError) {
    return <Alert message="Error loading vendors." description={error} type="error" />
  }

  return (
    <>
      <Table
        size="small"
        columns={columns}
        dataSource={data}
      />
    </>
  )
}

export default DataTable
