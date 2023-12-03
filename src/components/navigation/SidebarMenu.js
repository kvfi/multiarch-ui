import { Card, List } from 'antd'
import { APP_URLS } from '../../utils/constants'
import { Link } from 'react-router-dom'

const SidebarMenu = () => {
  return (
    <div id="SidebarMenu">
      <Card title="Quick Links">
        <List
          dataSource={[
            {
              title: 'Vendors',
              url: APP_URLS.MASTER_DATA_VENDORS
            }
          ]}
          renderItem={(item) => (
            <List.Item>
              <Link to={item.url}>{item.title}</Link>
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}

export default SidebarMenu
