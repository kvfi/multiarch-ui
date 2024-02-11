import { coreApi } from '../common/api'
import { API_ENDPOINTS } from '../utils/constants'

export const businessDepartmentEndpoints = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getBusinessDepartments: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.BUSINESS_DEPARTMENTS,
        method: 'GET',
        body: body
      })
    })
  })
})

export const { useGetBusinessDepartmentsQuery } = businessDepartmentEndpoints
