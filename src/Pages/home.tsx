import { Link } from "react-router-dom"
import ResponsiveAppBar from '../Components/navBar'

export function Home() {

    return (
        <>
            <ResponsiveAppBar/>
            <h1>This is the Home page!</h1>
            <Link to="/">Home</Link>
            <Link to="/GaussianSplat">GaussianSplat</Link>
            <Link to="/VisionOS">VisionOS</Link>

        </>
    )
}