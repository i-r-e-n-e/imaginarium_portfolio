import ResponsiveAppBar from '../components/navBar'
import Box from '@mui/material/Box'

export function GaussianSplat() {
    return (
        <>
            <ResponsiveAppBar/>  
            <Box 
                className="pictureBox" 
                sx={{
                    padding: 7
                }}
            >
                <h1>Gausssian Splat</h1>
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
    
        </>
    )
}