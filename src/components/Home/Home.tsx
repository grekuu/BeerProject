import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import './home.scss'
import { fetchAsyncBeer, selectPage } from '../../redux/beerSlice'
import BeerList from '../BeerList/BeerList'

const Home = () => {
    const dispatch = useAppDispatch()
    const page = useAppSelector(selectPage)

    useEffect(() => {
        dispatch(fetchAsyncBeer(page))
    }, [dispatch, page])

    return (
        <>
            <BeerList />
        </>
    )
}

export default Home
