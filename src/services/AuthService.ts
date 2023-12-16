import { IRegQueryData, IRegResponseData } from '../modules/IReg'
import { IUser } from '../modules/IUser'
import baseApi from './BaseApi'

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        registration: build.mutation<IRegResponseData, IRegQueryData>({
            query: (regData) => ({
                url: '/api/registration',
                method: 'POST',
                body: JSON.stringify(regData)
            })
        }),
        login: build.mutation<IRegResponseData, IRegQueryData>({
            query: (authData) => ({
                url: '/api/login',
                method: 'POST',
                body: JSON.stringify(authData)
            }),
            // transformErrorResponse: (response) => response.data
        }),
        logout: build.mutation({
            query: () => ({
                url: '/api/logout',
                method: 'POST',
            })
        }),
        refresh: build.query<IRegResponseData, null>({
            query: () => ({
                url: '/api/refresh',
                headers: {}
            })
        }),
        getUsers: build.query<IUser[], null>({
            query: () => ({
                url: '/api/users',
            })
        })
    })
})

export default authApi