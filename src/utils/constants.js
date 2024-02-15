export const APP_URLS = {
  DASHBOARD: '/',
  IT_ASSETS: '/ITAssets',
  MASTER_DATA_VENDORS: '/MasterData/Vendors',
  MASTER_DATA_VENDORS_NEW: '/MasterData/Vendors/New',
  APM_DASHBOARD: '/APM',
  APM_APPLICATION_PORTFOLIO: '/APM/ApplicationPortfolio',
  APM_NEW_APP: '/APM/ApplicationPortfolio/New',
  APM_VIEWINFO: '/APM/ApplicationPortoflio/ViewInfo',
  APM_CHANGE_REQUEST: '/APM/ChangeRequest',
  APM_CAPABILITY_MAP: '/APM/CapabilityMap',
  APM_SEARCH_APPLICATIONS: '/APM/SearchApplications',
  RISK_MANAGEMENT: '/RiskManagement',
  REQUIREMENTS_MANAGEMENT: '/RequirementsManagement',
  BUSINESS_PROCESS_MANAGEMENT: '/BPM',
  BPM_PROCESSES: '/BPM/Processes',
  BPM_PROCESSES_NEW: '/BPM/Processes/New'
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
  },
  CORE: {
    LIFECYCLE_STAGES: '/eap/lifecycle-stages',
    LIFECYCLE_STAGE_TYPES: '/eap/lifecycle-stage-types'
  }
}

export const MODEL_API_ENDPOINTS = {
  ELEMENTS: '/elements',
  APPLICATIONS_WITH_PROPERTIES: '/applications_with_properties',
  UNINDEXED_APPLICATIONS: '/unindexed_applications',
  CAPABILITIES: '/capabilities'
}