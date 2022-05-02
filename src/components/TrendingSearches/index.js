import useNearScreen from 'hooks/useNearScreen'
import React,{Suspense} from 'react'
import './TrendingSearches.css'



// Este archivo se mantiene a la espera que TRENDINGS esté visible y dispara el componente <TrendingSearches />

const TrendingSearches = React.lazy(
    ()=> import ('./TrendingSearches')
)




export default function LazyTrending() {

    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

    return (
        <div ref={fromRef}>
            <Suspense fallback={'Estamos buscando un GIF acorde con esto 🤔'}>
            {isNearScreen ? <TrendingSearches /> : null}
            </Suspense>
        </div>
    )
}