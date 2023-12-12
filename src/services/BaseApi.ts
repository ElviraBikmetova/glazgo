import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { logout } from "../store/redusers/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000',
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json')
        const token = localStorage.getItem('accessToken')
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    },
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
//   console.log(api.endpoint)
  if (result.error && result.error.status === 401) {
    api.dispatch(logout())
  }
  return result
}

const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Candidate'],
    endpoints: () => ({}),

})

export default baseApi