
import React, { useState, useEffect } from 'react';
import getGifs from '../services/getGif';
import Gif from './Gif'

import './ListOfGifs.css';

export default function ListOfGifs({ params }) {
	const { keyword } = params;

	const [loading, setLoading] = useState(false)


	const [gifs, setGifs] = useState([])


	// Se ejecuta cada vez que se renderiza el componente, recibe la funcion y las depencias, si no pones ninguna, solo se ejecuta una vez, la dependencia es Keyword, al cambiarla, se actualizará

	useEffect(function () {
		setLoading(true)
		getGifs({ keyword })
			.then(gifs => {
				setGifs(gifs)
				setLoading(false)
			})

	}, [keyword])

	if (loading)return <i>Searching cool gifs... 🤔</i>
	
	return <div className='all-gifs'>
		{
			gifs.map(({ id, title, url }) =>
				<div className='Gif-box'>
					<Gif
						key={id}
						id={id}
						title={title}
						url={url}
					/>
				</div>
			)
		}
	</div>
}




