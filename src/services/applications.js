import { coreApi } from '../common/api'
import { API_ENDPOINTS } from '../utils/constants'

export const applicationEndpoints = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getApplications: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATIONS,
        method: 'GET',
        body: body
      })
    }),
    getApplicationByAppCode: builder.query({
      query: (appCode) => ({
        url: `${API_ENDPOINTS.APPLICATIONS}/${appCode}`,
        method: 'GET'
      })
    }),
    getApplicationCriticalities: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATION_CRITICALITIES,
        method: 'GET',
        body: body
      })
    }),
    getApplicationStatuses: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATION_STATUSES,
        method: 'GET',
        body: body
      })
    }),
    getApplicationTypes: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATION_TYPES,
        method: 'GET',
        body: body
      })
    }),
    getApplicationArchitectureTypes: builder.query({
      query: () => ({
        url: API_ENDPOINTS.APM.ARCHITECTURE_TYPES,
        method: 'GET'
      })
    }),
    getApplicationEnvironments: builder.query({
      query: () => ({
        url: API_ENDPOINTS.APPLICATION_ENVIRONMENTS,
        method: 'GET'
      })
    }),
    getApplicationSourcingStrategies: builder.query({
      query: () => ({
        url: API_ENDPOINTS.APM.SOURCING_STRATEGIES,
        method: 'GET'
      })
    }),
    getApplicationInstallTypes: builder.query({
      query: () => ({
        url: API_ENDPOINTS.APM.INSTALL_TYPES,
        method: 'GET'
      })
    }),
    getApplicationCategories: builder.query({
      query: () => ({
        url: API_ENDPOINTS.APM.CATEGORIES,
        method: 'GET'
      })
    }),
    getApplicationFamilies: builder.query({
      query: () => ({
        url: API_ENDPOINTS.APM.FAMILIES,
        method: 'GET'
      })
    }),
    addApplication: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATIONS,
        method: 'POST',
        body: body
      })
    })
  })
})

export const {
  useGetApplicationsQuery,
  useGetApplicationByAppCodeQuery,
  useLazyGetApplicationByAppCodeQuery,
  useGetApplicationCriticalitiesQuery,
  useGetApplicationStatusesQuery,
  useGetApplicationEnvironmentsQuery,
  useGetApplicationTypesQuery,
  useGetApplicationArchitectureTypesQuery,
  useGetApplicationSourcingStrategiesQuery,
  useGetApplicationCategoriesQuery,
  useGetApplicationInstallTypesQuery,
  useGetApplicationFamiliesQuery,
  useAddApplicationMutation
} = applicationEndpoints
