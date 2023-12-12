import { IPagination } from "./IPagination"
import { IUser } from "./IUser"
import { IVacancy } from "./IVacancy"

export interface ICandidate {
    id: number
    surname: string
    name: string
    otch: string
    email: string
    phone: string
    referralProgram: number
    resume: string
}

export interface ICandidateProm {
    candidatId: ICandidate
    vacancyId: IVacancy
    statusChange: number
    statusChangeDate: string
    recruterId: IUser
    appointmentDate: string
}

export interface ICandidatesResponseData extends IPagination {
    results: ICandidateProm[]
}

export interface INewCandidate extends ICandidate {
    vacancy: number
    source: string
    birthday: Date
    comment: string
}

