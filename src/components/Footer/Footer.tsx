import { useEffect, useState } from 'react'
import './footer.scss'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useAppDispatch } from '../../redux/hooks'
import { fetchAsyncBeer } from '../../redux/beerSlice'
import { Alert } from 'react-bootstrap'

const Footer = () => {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        dispatch(fetchAsyncBeer(page))
    }, [dispatch, page])

    function handlePreviousPage() {
        if (page === 1) {
            setShowAlert(true)
        } else {
            setPage(page - 1)
        }
    }

    function handleNextPage() {
        setPage(page + 1)
    }

    function handleAlertClose() {
        setShowAlert(false)
    }

    return (
        <div className="footer">
            <FiChevronLeft className="arrow-icon" onClick={handlePreviousPage} />
            <div className="page-number">{page}</div>
            <FiChevronRight className="arrow-icon" onClick={handleNextPage} />
            {showAlert && (
                <Alert variant="danger" dismissible onClose={handleAlertClose} className="alert">
                    Page can't be lower than 1
                </Alert>
            )}
        </div>
    )
}

export default Footer
