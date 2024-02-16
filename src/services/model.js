import { modelApi } from '../common/api'
import { MODEL_API_ENDPOINTS } from '../utils/constants'

export const elementEndpoints = modelApi.injectEndpoints({
  endpoints: (builder) => ({
    getElelements: builder.query({
      query: () => ({
        url: MODEL_API_ENDPOINTS.ELEMENTS,
        method: 'GET',
        params: { class: 'eq.ApplicationComponent' }
      })
    }),
    getApplicationsWithProperties: builder.query({
      query: (queryOptions) => {
        const searchParams = new URLSearchParams(queryOptions).toString()
        return {
          url: `${MODEL_API_ENDPOINTS.APPLICATIONS_WITH_PROPERTIES}?${searchParams}`,
          method: 'GET'
        }
      }
    }),
    searchApplicationsWithPropertiesByAppCode: builder.query({
      query: (appCode) => ({
        url: `${MODEL_API_ENDPOINTS.APPLICATIONS_WITH_PROPERTIES}?props->>Code=ilike.${appCode}`,
        method: 'GET'
      })
    }),
    getApplicationsWithPropertiesByAppCode: builder.query({
      query: (appCode) => ({
        url: `${MODEL_API_ENDPOINTS.APPLICATIONS_WITH_PROPERTIES}?props->>Code=eq.${appCode}`,
        method: 'GET',
        headers: { Accept: 'application/vnd.pgrst.object+json' }
      })
    }),
    getBusinessCapabilities: builder.query({
      query: () => ({
        url: `${MODEL_API_ENDPOINTS.CAPABILITIES}`,
        method: 'GET'
      })
    }),
    getUnindexedApplications: builder.query({
      query: () => ({
        url: MODEL_API_ENDPOINTS.UNINDEXED_APPLICATIONS,
        method: 'GET'
      })
    }),
    getApplicationDependencies: builder.query({
      query: (modelId) => ({
        url: `${MODEL_API_ENDPOINTS.APPLICATION_DEPENDENCIES}?element_id=eq.${modelId}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useGetElelementsQuery,
  useGetApplicationsWithPropertiesQuery,
  useLazyGetApplicationsWithPropertiesQuery,
  useGetApplicationsWithPropertiesByAppCodeQuery,
  useGetBusinessCapabilitiesQuery,
  useGetUnindexedApplicationsQuery,
  useGetApplicationDependenciesQuery,
  useLazyGetApplicationDependenciesQuery
} = elementEndpoints
