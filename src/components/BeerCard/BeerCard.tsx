import { BeerType } from '../../redux/beerSlice'
import './beerCard.scss'

const BeerCard = ({ image_url, name, tagline }: BeerType) => {
    return (
        <div className="beer-card">
            <img src={image_url} alt={name} loading="lazy" />
            <hr />
            <h5>{name}</h5>
            <div className="tagline">{tagline}</div>
        </div>
    )
}

export default BeerCard
