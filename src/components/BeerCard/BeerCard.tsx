import { BeerType } from '../../redux/beerSlice'
import { useNavigate } from 'react-router-dom'
import './beerCard.scss'

const BeerCard = ({ image_url, name, tagline, id }: BeerType) => {
    const navigate = useNavigate()

    return (
        <div className="beer-card" onClick={() => navigate(`/details/${id}`)}>
            <img src={image_url} alt={name} loading="lazy" />
            <hr />
            <h5>{name}</h5>
            <div className="tagline">{tagline}</div>
        </div>
    )
}

export default BeerCard
