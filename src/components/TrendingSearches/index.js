import React, { useEffect, useState } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService'
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

    useEffect(() => {
        const onChange = (entries) => {

            // tenemos una entries, ya que solo observamos un elemento, por eseo accedemos al primer valor de la array de entries
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
            }
        }


        const observer = new IntersectionObserver(onChange, {
            //    Cuando el elemento esté a menos de 100 píxeles del viewport
            rootMargin: '100px'
        })
        observer.observe(document.getElementById('LazyTrending'))

    })

    return <div id='LazyTrending'>
        {show ? <TrendingSearches /> : null}

    </div>


}