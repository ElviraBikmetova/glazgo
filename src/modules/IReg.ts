import { IUser } from "./IUser"

export interface IRegQueryData extends IUser {
    email: string
    password: string
}
export interface IRegResponseData {
    accessToken: string
    refreshToken: string
    user: IUser
}
