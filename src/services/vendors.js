import queryString from "query-string"
import { coreApi } from "../common/api"
import { API_ENDPOINTS } from "../utils/constants"



export const vendorsEndpoints = coreApi.injectEndpoints({
    endpoints: (builder) => ({
      getVendors: builder.query({
        query: (query) => ({
          url: `${API_ENDPOINTS.VENDORS}?${queryString.stringify(query)}`,
          method: 'GET'
        })
      })
    })
  })
  
  export const {
    useGetVendorsQuery
  } = vendorsEndpoints
  

