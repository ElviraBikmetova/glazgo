export interface IPagination {
    count: number
    previous: string
    next: string
    params: string
    startCount: number
    endCount: number
    isPrev: boolean
    isNext: boolean
}