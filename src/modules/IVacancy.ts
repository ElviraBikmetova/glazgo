import { IPagination } from "./IPagination"
import { IUser } from "./IUser"

export interface IVacancy {
    nameVacancy: string
    reason: number
    statusVacancy: number
    region: number
    salary: number
    id: number
    dateCust: string
    customer: IUser
    recruter: IUser
}

export interface IVacancyChangeQueryData extends IVacancy {
    project: number
    schedule: number
    cause: number
    link: string
    candidate: number
    statusVacancy: number
}

export interface IVacancyResponseData extends IPagination {
    results: IVacancy[]
}