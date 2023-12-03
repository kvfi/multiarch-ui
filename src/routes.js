import { SiteLayout } from './components/layout'
import ApplicationPortfolioHome from './pages/Apps'
import AppNewPage from './pages/Apps/New'
import ITAssetsManagementHome from './pages/ITAssets'
import VendorsPage from './pages/MasterData/VendorsHome'
import { NotFound } from './pages/not-found'
import RequirementsRepositoryHome from './pages/RequirementsRepository'
import { APP_URLS } from './utils/constants'

export const routes = [
  {
    path: '404',
    element: <NotFound />
  },
  {
    path: APP_URLS.DASHBOARD,
    element: <SiteLayout />,
    children: [
      {
        path: APP_URLS.IT_ASSETS,
        element: <ITAssetsManagementHome />
      },
      {
        path: APP_URLS.APPLICATION_PORTFOLIO,
        element: <ApplicationPortfolioHome />
      },
      {
        path: APP_URLS.APPLICATION_PORTFOLIO_NEW_APP,
        element: <AppNewPage />
      },
      {
        path: APP_URLS.REQUIREMENTS_MANAGEMENT,
        element: <RequirementsRepositoryHome />
      },
      {
        path: APP_URLS.MASTER_DATA_VENDORS,
        element: <VendorsPage />
      },
    ]
  }
]
