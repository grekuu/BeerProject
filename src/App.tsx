import './index.scss'
import { increment, selectCount } from './redux/beerSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
    const dispatch = useAppDispatch()
    const beerValue = useAppSelector(selectCount)

    return (
        <div>
            <button onClick={() => dispatch(increment())}></button>
            <div>{beerValue}</div>
        </div>
    )
}

export default App
