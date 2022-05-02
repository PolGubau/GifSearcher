import React, { useEffect, useState, useRef } from 'react'
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


export default function LazyTrending() {

    // Dirá cuando mostrar las trending para no cargar mucho las cosas
    const [show, setShow] = useState(false)
    // Guarda valores que entre renderizados no va a variar
    const elementRef = useRef()

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
                : import('intersection-observers')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                //    Cuando el elemento esté a menos de 100 píxeles del viewport
                rootMargin: '100px'
            })
            // Observamos el valor actual del valor con esa referencia
            observer.observe(elementRef.current)
        })



        // Otra forma de desconectarlo
        return () => observer && observer.disconnect()

    })

    return <div ref={elementRef}>
        {show ? <TrendingSearches /> : null}

    </div>


}