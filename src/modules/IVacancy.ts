import { IPagination } from "./IPagination"
import { IUser } from "./IUser"

export interface IVacancy {
    name: string
    status?: string
    city: string
    salary: number
    schedule: string
    reason: string
    _id: string
    // statusVacancy: number
    // dateCust: string
    // customer: IUser
    // recruter: IUser
}

// export interface IVacancyChangeQueryData extends IVacancy {
//     project: number
//     schedule: number
//     cause: number
//     link: string
//     candidate: number
//     statusVacancy: number
// }

export interface IVacancyResponseData extends IPagination {
    results: IVacancy[]
}