import { IUser } from "./IUser"

export interface IRegQueryData extends IUser {
    password1: string
    password2: string
    referralToken?: string
}
export interface IRegResponseData {
    access: string
    refresh: string
    user: IUser
}
