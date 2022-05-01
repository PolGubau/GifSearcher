import React from 'react'

const staticContext=React.createContext({
    // Valor inicial del objeto si no tiene provider
    name:'Esto es sin provider'
})
export default staticContext