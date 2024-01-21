import { Alert, Pagination, Spin, Table } from 'antd'

const DataTable = ({ data, isLoading, isError, error, columns }) => {
  if (isLoading) {
    return <Spin />
  }

  if (isError) {
    return <Alert message="Error loading vendors." description={error} type="error" />
  }
  
  return (
    <Table
      bordered
      size="small"
      columns={columns}
      dataSource={data.items}
      pagination={<Pagination current={data.page} total={data.total} />}
    />
  )
}

export default DataTable
