import { useNavigate } from 'react-router-dom'
import './header.scss'
import { useAppDispatch } from '../../redux/hooks'
import { updatePage } from '../../redux/beerSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleTitleClick = () => {
        navigate('/')
        dispatch(updatePage(1))
    }

    return (
        <div className="header">
            <div className="title" onClick={handleTitleClick}>
                Beers
            </div>
        </div>
    )
}

export default Header
