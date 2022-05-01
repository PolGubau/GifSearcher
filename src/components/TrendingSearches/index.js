import React, { useEffect, useState } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService'
import Category from '../Category'

import './TrendingSearches.css'

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
