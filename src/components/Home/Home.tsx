import { useEffect } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import './home.scss'
import { fetchAsyncBeer } from '../../redux/beerSlice'
import BeerList from '../BeerList/BeerList'

const Home = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAsyncBeer())
    }, [dispatch])

    return (
        <>
            <BeerList />
        </>
    )
}

export default Home
