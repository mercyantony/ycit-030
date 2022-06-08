import { useLocation } from "react-router-dom"

export function About() {
    const location = useLocation()

    console.log(location.pathname) // '/about'

    return (
        <>
            <h1>The about page is on: {location.pathname}</h1>
        </>
    )
}
