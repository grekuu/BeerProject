import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface BeerState {
    value: number
}

const initialState: BeerState = {
    value: 0,
}

export const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
    },
})

export const { increment } = beerSlice.actions

export const selectCount = (state: RootState) => state.beer.value

export default beerSlice.reducer
