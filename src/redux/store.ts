import { configureStore } from '@reduxjs/toolkit'
import beerReducer from './beerSlice'

export const store = configureStore({
    reducer: {
        beer: beerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
