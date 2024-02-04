import { modelApi } from '../common/api'
import { MODEL_API_ENDPOINTS } from '../utils/constants'

export const elementEndpoints = modelApi.injectEndpoints({
  endpoints: (builder) => ({
    getElelements: builder.query({
      query: () => ({
        url: MODEL_API_ENDPOINTS.ELEMENTS,
        method: 'GET',
        params: { class: `eq.ApplicationComponent` }
      })
    }),
    getApplicationsWithProperties: builder.query({
      query: () => ({
        url: MODEL_API_ENDPOINTS.APPLICATIONS_WITH_PROPERTIES,
        method: 'GET'
      })
    }),
    getApplicationsWithPropertiesByAppCode: builder.query({
      query: (appCode) => ({
        url: `${MODEL_API_ENDPOINTS.APPLICATIONS_WITH_PROPERTIES}?props->>ApplicationCode=eq.${appCode}`,
        method: 'GET',
        headers: { Accept: 'application/vnd.pgrst.object+json' }
      })
    }),
    getBusinessCapabilities: builder.query({
      query: () => ({
        url: `${MODEL_API_ENDPOINTS.CAPABILITIES}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useGetElelementsQuery,
  useGetApplicationsWithPropertiesQuery,
  useGetApplicationsWithPropertiesByAppCodeQuery,
  useGetBusinessCapabilitiesQuery
} = elementEndpoints
