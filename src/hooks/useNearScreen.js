


import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()


    // Dirá cuando mostrar las trending para no cargar mucho las cosas
    useEffect(() => {
        let observer

        const element = externalRef ? externalRef.current : fromRef.current

        const onChange = (entries, observer) => {

            // tenemos una entries, ya que solo observamos un elemento, por eseo accedemos al primer valor de la array de entries
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)

                // Una vez entre en el vp, dejas de mirarlo
                once && observer.disconnect()
            }else{
                !once &&setShow(false)
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
            if (element) observer.observe(element)

        })



        // Otra forma de desconectarlo
        return () => observer && observer.disconnect()

    })
    return { isNearScreen, fromRef }
}