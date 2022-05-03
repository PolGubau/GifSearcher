import React from 'react'
import { Link } from "wouter";

import './Gif.css';

export default function Gif({ title, url, id }) {
  if(title.length===0)title='Gif with no name'
  return (

    <Link to={`/gif/${id}`} className='Gif'>
      <h4> {title}</h4>
      <img loading='lazy' alt={title} src={url} />
    </Link>


  )
}