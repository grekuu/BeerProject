import { useParams } from 'react-router-dom'
import './beerDetail.scss'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchAsyncSingleBeer, removeSelectedBeer, selectSingleBeer } from '../../redux/beerSlice'

const BeerDetail = () => {
    const { beerId } = useParams()
    const dispatch = useAppDispatch()
    const beerDetail = useAppSelector(selectSingleBeer)

    useEffect(() => {
        dispatch(fetchAsyncSingleBeer(beerId!))
        return () => {
            dispatch(removeSelectedBeer())
        }
    }, [dispatch, beerId])

    return (
        <div>
            {beerDetail.map((singleBeerDetail) => (
                <img src={singleBeerDetail.image_url} alt="" />
            ))}
        </div>
    )
}

export default BeerDetail
