import { IVacancy, IVacancyResponseData } from '../modules/IVacancy'
import camelcaseKeys from 'camelcase-keys'
import baseApi from './BaseApi'

const vacancyApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllVacancies: build.query<IVacancy[], void>({
            query: () => ({
                url: '/api/vacancies',
            }),
        }),
        // fetchVacancies: build.query<IVacancyResponseData, string>({
        //     query: (params) => ({
        //         url: `/api-vac/${params}`
        //     }),
        //     transformResponse: (response: any): IVacancyResponseData => camelcaseKeys(response, { deep: true })
        // }),
        fetchVacancy: build.query<IVacancy, string>({
            query: (id) => ({
                url: `/api/vacancies/${id}`,
            }),
        }),
        createVacancy: build.mutation<IVacancy, IVacancy>({
            query: (vacancy) => ({
                url: `/api/vacancies`,
                method: 'POST',
                body: vacancy
            })
        }),
        updateVacancy: build.mutation<IVacancy, {vacancy: IVacancy, id: string | undefined}>({
            query: ({vacancy, id}) => ({
                url: `/api/vacancies/${id}`,
                method: 'PUT',
                body: vacancy
            })
        })
    })
})

export default vacancyApi