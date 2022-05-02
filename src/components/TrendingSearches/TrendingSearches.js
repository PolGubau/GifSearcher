import getTrendingTerms from 'services/getTrendingTermsService'
import Category from 'components/Category'
import React, { useEffect, useState } from 'react'



// Este archivo carga una vez index.js le ha dado la salida




export default function TrendingSearches() {

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