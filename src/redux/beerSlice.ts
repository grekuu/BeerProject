import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import beerApi from '../common/beerApi'

export const fetchAsyncBeer = createAsyncThunk('beer/fetchAsyncBeer', async (page: number) => {
    const response = await beerApi.get(`/beers?page=${page}&per_page=12`)
    return response.data
})

export const fetchAsyncSingleBeer = createAsyncThunk('beer/fetchAsyncSingleBeer', async (id: string) => {
    const response = await beerApi.get(`/beers/${id}`)
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
    selectedBeer: BeerType[]
}

const initialState: BeerState = {
    beer: [],
    selectedBeer: [],
}

export const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        removeSelectedBeer: (state) => {
            state.selectedBeer = []
        },
    },
    extraReducers: (builder) => {
        //Beers
        builder.addCase(fetchAsyncBeer.pending, () => {})
        builder.addCase(fetchAsyncBeer.fulfilled, (state, { payload }) => {
            state.beer = payload
        })
        builder.addCase(fetchAsyncBeer.rejected, () => {})

        //Single Beer
        builder.addCase(fetchAsyncSingleBeer.pending, () => {})
        builder.addCase(fetchAsyncSingleBeer.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.selectedBeer = payload
        })
        builder.addCase(fetchAsyncSingleBeer.rejected, () => {})
    },
})

export const { removeSelectedBeer } = beerSlice.actions

export const selectBeer = (state: RootState) => state.beer.beer
export const selectSingleBeer = (state: RootState) => state.beer.selectedBeer

export default beerSlice.reducer
