import { useNavigate } from 'react-router-dom'
import './header.scss'

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="title" onClick={() => navigate(`/`)}>
                Beers
            </div>
        </div>
    )
}

export default Header
