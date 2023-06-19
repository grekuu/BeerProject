import { useEffect, useState } from 'react'
import './footer.scss'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useAppDispatch } from '../../redux/hooks'
import { fetchAsyncBeer } from '../../redux/beerSlice'

const Footer = () => {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)
    const [unclickable, setUnclickable] = useState(false)

    useEffect(() => {
        dispatch(fetchAsyncBeer(page))
        if (page === 1) {
            setUnclickable(true)
        } else {
            setUnclickable(false)
        }
    }, [dispatch, page])

    function handlePreviousPage() {
        setPage(page - 1)
    }

    function handleNextPage() {
        setPage(page + 1)
    }

    return (
        <div className="footer">
            <FiChevronLeft
                className={unclickable ? 'arrow-icon unclickable' : 'arrow-icon'}
                onClick={handlePreviousPage}
            />
            <div className="page-number">{page}</div>
            <FiChevronRight className="arrow-icon" onClick={handleNextPage} />
        </div>
    )
}

export default Footer
