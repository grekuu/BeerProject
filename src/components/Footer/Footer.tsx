import './footer.scss'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Footer = () => {
    return (
        <div className="footer">
            <FiChevronLeft className="arrow-icon" />
            <div className="page-number">1</div>
            <FiChevronRight className="arrow-icon" />
        </div>
    )
}

export default Footer
