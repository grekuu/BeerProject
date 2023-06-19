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
            {beerDetail.map((selectedBeer) => (
                <div className="beer-detail-container" key={selectedBeer.id}>
                    <div className="beer-info">
                        <img src={selectedBeer.image_url} alt={selectedBeer.name} />
                        <div className="name">{selectedBeer.name}</div>
                        <div className="tagline">{selectedBeer.tagline}</div>
                        <div className="description">{selectedBeer.description}</div>
                        <div>
                            <b>ABV:</b> {selectedBeer.abv}
                        </div>
                        <div>
                            <b>IBU:</b> {selectedBeer.ibu}
                        </div>
                        <div>
                            <h4>Ingredients:</h4>
                            <div>
                                <b>Malt:</b>
                                <ul>
                                    {selectedBeer.ingredients.malt.map((malt) => (
                                        <li key={malt.name}>
                                            {malt.name} - {malt.amount.value} {malt.amount.unit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <b>Hops:</b>
                                <ul>
                                    {selectedBeer.ingredients.hops.map((hop) => (
                                        <li key={hop.name}>
                                            {hop.name} - {hop.amount.value} {hop.amount.unit} - {hop.add} -{' '}
                                            {hop.attribute}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BeerDetail
