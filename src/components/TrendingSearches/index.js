import React, { useEffect, useState, useRef } from 'react'
// useRef: Guarda valores que entre renderizados no va a variar

import getTrendingTerms from 'services/getTrendingTermsService'
import Category from '../Category'

import './TrendingSearches.css'

function TrendingSearches() {



    const [trends, setTrends] = useState([])




    useEffect(() => {
        getTrendingTerms()
            .then(setTrends)
    }, [])


    return (

        <div className='trendsBox'>
            <Category
                name='Trends'
                options={trends}
            />
        </div>
    )
};
function useNearScreen({ distance = '100px' } = {}) {

    const fromRef = useRef()


    // Dirá cuando mostrar las trending para no cargar mucho las cosas
    const [isNearScreen, setShow] = useState(false)
    useEffect(() => {
        let observer
        const onChange = (entries, observer) => {

            // tenemos una entries, ya que solo observamos un elemento, por eseo accedemos al primer valor de la array de entries
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)

                // Una vez entre en el vp, dejas de mirarlo
                observer.disconnect()
            }
        }

        // Si no va el intersectionObserver, lo importo
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')

        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                //    Cuando el elemento esté a menos de 100 píxeles del viewport
                rootMargin: distance
            })
            // Observamos el valor actual del valor con esa referencia
            observer.observe(fromRef.current)
        })



        // Otra forma de desconectarlo
        return () => observer && observer.disconnect()

    })
    return { isNearScreen, fromRef }
}


export default function LazyTrending() {


    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

    return (
        <div ref={fromRef}>
            {isNearScreen ? <TrendingSearches /> : null}
        </div>
    )
}