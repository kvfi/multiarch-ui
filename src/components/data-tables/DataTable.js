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
        bordered
        size="small"
        columns={columns}
        dataSource={data.items}
        pagination={{ current: data.page, pageSize: data.size, total: data.total }}
      />
    </>
  )
}

export default DataTable
