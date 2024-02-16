import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from 'redux'
import siteInfoReducer from './ducks/site-info'
import { applicationEndpoints } from './services/applications'
import { businessDepartmentEndpoints } from './services/business_departments'
import { vendorsEndpoints } from './services/vendors'
import { elementEndpoints } from './services/model'
import { eapEndpoints } from './services/eap'
import { irmEndpoints } from './services/irm'

const reducer = combineReducers({
  siteInfo: siteInfoReducer,
  [applicationEndpoints.reducerPath]: applicationEndpoints.reducer,
  [businessDepartmentEndpoints.reducerPath]: businessDepartmentEndpoints.reducer,
  [vendorsEndpoints.reducerPath]: vendorsEndpoints.reducer,
  [elementEndpoints.reducerPath]: elementEndpoints.reducer,
  [eapEndpoints.reducerPath]: eapEndpoints.reducer,
  [irmEndpoints.reducerPath]: irmEndpoints.reducer
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      applicationEndpoints.middleware,
      businessDepartmentEndpoints.middleware,
      vendorsEndpoints.middleware,
      elementEndpoints.middleware,
      eapEndpoints.middleware,
      irmEndpoints.middleware
    )
})

setupListeners(store.dispatch)

export default store
