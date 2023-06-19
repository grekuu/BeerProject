import { selectBeer } from '../../redux/beerSlice'
import { useAppSelector } from '../../redux/hooks'
import BeerCard from '../BeerCard/BeerCard'
import './beerList.scss'
import Spinner from 'react-bootstrap/Spinner'

const BeerList = () => {
    const beer = useAppSelector(selectBeer)

    return (
        <>
            {beer.length > 0 ? (
                <div className="container-sm beer-wrapper">
                    {beer.map((sBeer) => (
                        <BeerCard key={sBeer.id} {...sBeer} />
                    ))}
                </div>
            ) : (
                <div className="spinner-container">
                    <Spinner animation="border" role="status" className="spinner">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
        </>
    )
}

export default BeerList
