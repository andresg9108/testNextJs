import Link from "next/link"

export default function Page() {
    return (
        <>
            <br /><br />

            <Link href="/">Atrás</Link>
            <br /><br />
            
            <p>My Dashboard</p>
            <br /><br />

            <ul>
                <li>
                <Link 
                        href="/dashboard/uno"
                        style={{backgroundColor: 'red'}}
                    >Uno</Link>
                </li>
                <li>
                    <Link 
                        href="/dashboard/dos"
                        style={{backgroundColor: 'blue'}}
                    >Dos</Link>
                </li>
                <li>
                    <Link 
                        href="/dashboard/fetch"
                    >Fetch</Link>
                </li>
            </ul>
            <br /><br />
        </>
    )
}