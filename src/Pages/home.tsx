import { Link } from "react-router-dom"
import ResponsiveAppBar from '../Components/navBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import './home.css'

export function Home() {

    return (
        <>
            <ResponsiveAppBar/>
            <Box 
                className="pictureBox" 
                sx={{
                    padding: 7
                }}
            >
                <h1>New Realities</h1>
                <p>SCU IMaginarium's explorations of the latest three-dimensional technologies.</p>
            </Box>
            <Box
                className="nameBox"
                sx={{
                    padding: 7,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div>
                    <h2>
                        Gaussian Splat
                    </h2>
                </div>
                <div>
                    <p>
                        3D modeling of objects and spaces using gaussian splats
                    </p>
                </div>
            </Box>
               
            <Box component="span" sx={{ display: 'block' }}>carousel</Box>
             <Box
                className="nameBox"
                sx={{
                    padding: 7,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div>
                    <h2>
                        VisionOS
                    </h2>
                </div>
                <div>
                    <p>
                        Interactive applications in Apple's latest spatial computing headset
                    </p>
                </div>
            </Box>
               
            <Box component="span" sx={{ display: 'block' }}>carousel</Box>


            <h1>This is the Home page!</h1>
            <Link to="/">Home</Link>
            <Link to="/GaussianSplat">GaussianSplat</Link>
            <Link to="/VisionOS">VisionOS</Link>

        </>
    )
}