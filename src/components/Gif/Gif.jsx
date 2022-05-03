import React from 'react'
import { Link } from "wouter";

import './Gif.css';

export default function Gif({ title, url, id, haveTitle = true }) {


  if (title.length === 0) title = 'Gif with no name'

  const titleConditional = haveTitle ? title : '';


  return (

    <Link to={`/gif/${id}`} className='Gif'>

      <h4  className={`${haveTitle ? 'title' : 'NoTitle'}`}>
        {titleConditional}
      </h4>

      <img
        className={`${haveTitle ? 'Gif-Img-Title' : 'Gif-Img-No-Title'}`}
        loading='lazy' alt={title} src={url}
      />
      
    </Link>


  )
}