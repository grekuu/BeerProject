import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import BeerDetail from './components/BeerDetail/BeerDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import { useAppSelector } from './redux/hooks'
import { selectShowFooter } from './redux/beerSlice'

function App() {
    const showFooter = useAppSelector(selectShowFooter)
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/details/:beerId" element={<BeerDetail />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
                {showFooter ? <Footer /> : <></>}
            </Router>
        </>
    )
}

export default App
