import Spinner from 'components/Spinner/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import React,{Suspense} from 'react'
import './TrendingSearches.css'



// Este archivo se mantiene a la espera que TRENDINGS esté visible y dispara el componente <TrendingSearches />

const TrendingSearches = React.lazy(
    ()=> import ('./TrendingSearches')
)




export default function LazyTrending() {

    const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' })

    return (
        <div ref={fromRef}>
            <Suspense fallback={<><p>Buscando Tendencias</p><Spinner /></>}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}
            </Suspense>
        </div>
    )
}