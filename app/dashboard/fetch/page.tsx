'use client'

import { Suspense, useEffect, useState } from 'react'
import Link from "next/link"

const Page = () => {
    const [dogs, setDogs] = useState([])
    
    useEffect(() => {
        globalThis
        .fetch('https://dogapi.dog/api/v2/breeds')
        .then(oResponse => {
            if (!oResponse.ok) throw new Error('Connection Error')
            
            return oResponse.json()
        })
        .then(oResponse => {
            console.log(oResponse.data)
            setDogs(oResponse.data)
        })
        .catch(oError => {
            console.log(oError)
        })
    }, [])

    return(
        <>
            <br /><br />

            <Link href="/dashboard">Atrás</Link>
            <br /><br />

            <h2>Fetch</h2>
            <br /><br />

            <Suspense fallback={<p>Cargando...</p>}>
                <ul>
                    {
                        dogs.map(dog => (
                            <li key={dog.id}>{dog.attributes.name}</li>
                        ))
                    }
                </ul>
            </Suspense>
        </>
    )
}

export default Page