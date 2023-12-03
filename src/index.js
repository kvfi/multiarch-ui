import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import store from './store'
import '@fontsource-variable/public-sans'
import './styles.css'

import 'reset-css'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#7CBA27',
          fontFamily: 'Public Sans Variable, sans-serif;'
        }
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
)
