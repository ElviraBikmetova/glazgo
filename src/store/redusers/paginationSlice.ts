import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPagination } from "../../modules/IPagination";

const initialState: IPagination = {
    count: 0,
    previous: '',
    next: '',
    params: '',
    startCount: 0,
    endCount: 0,
    isPrev: false,
    isNext: true,
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setPaginationData(state, action: PayloadAction<IPagination>) {
            state.count = action.payload.count
            state.previous = action.payload.previous ? action.payload.previous.slice(action.payload.previous.indexOf('?')) : ''
            state.next = action.payload.next ? action.payload.next.slice(action.payload.next.indexOf('?')) : ''

            if (state.count) {
                if (state.previous) {
                    if (state.isNext) {
                        state.startCount = state.startCount + 10
                    }
                    if (state.isPrev) {
                        state.startCount = state.startCount - 10
                    }
                } else {
                    state.startCount = 1
                }
            } else {
                state.startCount = 0
            }

            if (state.count <= 10) {
                state.endCount = state.count
            } else if (state.count > 10) {
                if (state.isNext) {
                    if (state.next) {
                        state.endCount = state.endCount + 10
                    } else {
                        state.endCount = state.count
                    }
                }
                if (state.isPrev) {
                    if (state.endCount === state.count) {
                        state.endCount = Math.floor(state.count / 10) * 10
                    } else {
                        state.endCount = state.endCount - 10
                    }
                }
            }
      },
        setParams(state, payload: PayloadAction<string>) {
            state.params = payload.payload
        },
        setPrev(state, payload: PayloadAction<boolean>) {
            state.isPrev = payload.payload
        },
        setNext(state, payload: PayloadAction<boolean>) {
            state.isNext = payload.payload
        },
        resetToInitialState(state) {
            // Просто возвращаем начальное состояние
            return initialState;
        }
    }
})

export const {setPaginationData, setParams, resetToInitialState, setPrev, setNext} = paginationSlice.actions

export default paginationSlice.reducer