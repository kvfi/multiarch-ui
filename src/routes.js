import { SiteLayout } from './components/layout'
import ApplicationPortfolio from './pages/APM/ApplicationPortfolio'
import ApplicationPortfolioMangementDashboard from './pages/APM/Dashboard'
import ApplicationPortfolioMangementRegisterApplication from './pages/APM/New'
import AppViewInfo from './pages/APM/ViewInfo'
import ITAssetsManagementHome from './pages/ITAssets'
import VendorsPage from './pages/MasterData/VendorsHome'
import { NotFound } from './pages/not-found'
import BPMHomePage from './pages/Processes'
import ProcessNew from './pages/Processes/ProcessNew'
import RequirementsRepositoryHome from './pages/RM'
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
        path: APP_URLS.APM_DASHBOARD,
        element: <ApplicationPortfolioMangementDashboard />
      },
      {
        path: `${APP_URLS.APM_VIEWINFO}/:appCode`,
        element: <AppViewInfo />
      },
      {
        path: `${APP_URLS.APM_NEW_APP}`,
        element: <ApplicationPortfolioMangementRegisterApplication />
      },
      {
        path: `${APP_URLS.APM_APPLICATION_PORTFOLIO}`,
        element: <ApplicationPortfolio />
      },
      {
        path: APP_URLS.BPM_PROCESSES,
        element: <BPMHomePage />
      },
      {
        path: APP_URLS.BPM_PROCESSES_NEW,
        element: <ProcessNew />
      },
      {
        path: APP_URLS.REQUIREMENTS_MANAGEMENT,
        element: <RequirementsRepositoryHome />
      },
      {
        path: APP_URLS.MASTER_DATA_VENDORS,
        element: <VendorsPage />
      }
    ]
  }
]
