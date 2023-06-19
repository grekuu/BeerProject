import { selectBeer } from '../../redux/beerSlice'
import { useAppSelector } from '../../redux/hooks'
import BeerCard from '../BeerCard/BeerCard'
import './beerList.scss'

const BeerList = () => {
    const beer = useAppSelector(selectBeer)
    console.log(beer)

    return (
        <div className="container-sm beer-wrapper">
            {beer.map((sBeer) => (
                <BeerCard key={sBeer.id} {...sBeer} />
            ))}
        </div>
    )
}

export default BeerList
