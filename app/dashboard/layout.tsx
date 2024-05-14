'use client'

import { usePathname } from "next/navigation"

export default function Layout({ children }){
    const pathname = usePathname()

    return(
        <section>
            Dashboard Layout ({ pathname })
            { children }
        </section>
    )
}