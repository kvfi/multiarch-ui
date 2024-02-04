export const APP_URLS = {
  DASHBOARD: '/',
  IT_ASSETS: '/ITAssets',
  MASTER_DATA_VENDORS: '/MasterData/Vendors',
  MASTER_DATA_VENDORS_NEW: '/MasterData/Vendors/New',
  APPLICATION_PORTFOLIO: '/Apps',
  APPLICATION_PORTFOLIO_NEW_APP: '/Apps/New',
  APPLICATION_PORTFOLIO_VIEWINFO: '/Apps/ViewInfo',
  APPLICATION_PORTFOLIO_CHANGE_REQUEST: '/Apps/ChangeRequest',
  RISK_MANAGEMENT: '/RiskManagement',
  REQUIREMENTS_MANAGEMENT: '/RequirementsManagement',
  BUSINESS_PROCESS_MANAGEMENT: '/BPM',
  BPM_PROCESSES: '/BPM/Processes',
  BPM_PROCESSES_NEW: '/BPM/Processes/New',
}

export const API_ENDPOINTS = {
  APPLICATIONS: '/applications',
  APPLICATION_CRITICALITIES: '/applications/criticalities',
  APPLICATION_STATUSES: '/applications/statuses',
  APPLICATION_ENVIRONMENTS: '/applications/environements',
  APPLICATION_TYPES: '/applications/types',
  BUSINESS_DEPARTMENTS: '/objects/departments',
  VENDORS: '/vendors',
  APM: {
    BUSINESS_PROCESS: '/bpm/processes'
  }
}

export const MODEL_API_ENDPOINTS = {
  ELEMENTS: '/elements',
  APPLICATIONS_WITH_PROPERTIES: '/applications_with_properties',
  CAPABILITIES: '/capabilities',
}

export const formLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
  formLayout: "vertical",
  size: "large"
}

export const tailFormLayout = {
  wrapperCol: { offset: 8, span: 16 }
}