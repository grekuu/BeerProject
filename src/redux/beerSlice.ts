import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
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

export interface Malt {
    name: string
    amount: {
        value: number
        unit: string
    }
}

export interface Hop {
    name: string
    amount: {
        value: number
        unit: string
    }
    add: string
    attribute: string
}

export interface Yeast {
    name: string
}

export interface Ingredients {
    malt: Malt[]
    hops: Hop[]
    yeast: Yeast
}

export interface BeerType {
    id: number
    image_url: string
    name: string
    tagline: string
    description: string
    abv: number
    ibu: number
    ingredients: Ingredients
}

interface BeerState {
    beer: BeerType[]
    selectedBeer: BeerType[]
    page: number
    showFooter: boolean
}

const initialState: BeerState = {
    beer: [],
    selectedBeer: [],
    page: 1,
    showFooter: true,
}

export const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        removeSelectedBeer: (state) => {
            state.selectedBeer = []
        },
        updatePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setShowFooter: (state, action: PayloadAction<boolean>) => {
            state.showFooter = action.payload
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
            state.selectedBeer = payload
        })
        builder.addCase(fetchAsyncSingleBeer.rejected, () => {})
    },
})

export const { removeSelectedBeer, updatePage, setShowFooter } = beerSlice.actions

export const selectBeer = (state: RootState) => state.beer.beer
export const selectSingleBeer = (state: RootState) => state.beer.selectedBeer
export const selectPage = (state: RootState) => state.beer.page
export const selectShowFooter = (state: RootState) => state.beer.showFooter

export default beerSlice.reducer
