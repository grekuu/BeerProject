import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import beerApi from '../common/beerApi'

export const fetchAsyncBeer = createAsyncThunk('beer/fetchAsyncBeer', async () => {
    const response = await beerApi.get('/beers?page=1&per_page=12')
    return response.data
})

export interface BeerType {
    id: number
    image_url: string
    name: string
    tagline: string
    description: string
    abv: number
    ibu: number
    ingrediends: any[]
}

interface BeerState {
    beer: BeerType[]
}

const initialState: BeerState = {
    beer: [],
}

export const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncBeer.pending, () => {})
        builder.addCase(fetchAsyncBeer.fulfilled, (state, { payload }) => {
            state.beer = payload
        })
        builder.addCase(fetchAsyncBeer.rejected, () => {})
    },
})

export const {} = beerSlice.actions

export const selectBeer = (state: RootState) => state.beer.beer

export default beerSlice.reducer
