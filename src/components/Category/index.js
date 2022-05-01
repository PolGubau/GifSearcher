


import React from 'react'
import { Link } from 'wouter'
import './category.css'


export default function Category({ name, options }) {

    return (
        <>
            <div>

                <h5>{name}</h5>
            </div>

            <div className='trendsTags'>

                {options.map(singleCategory =>
                    <p className={`itemCategory`}>
                        
                        <Link to={`/search/${singleCategory}`}>
                             {singleCategory} 
                             </Link></p>
                )}

            </div>

        </>
    )

};
