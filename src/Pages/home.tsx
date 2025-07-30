import Navigation from '../components/navigation'
import CardCarousel from "../components/card_slider"

import { Box, Typography } from '@mui/material';
import './home.css'
import { slides } from "./data/carouselData.json"
import { Hero } from "../components/hero"


export function Home() {
    return (
        <>
            <Navigation />
            <Hero/>
            <Box
                className="nameBox"
                sx={{
                    minHeight: '40vh', // optional: gives it more vertical space
                    px: 5,
                    py: 10,
                    pb: 0,
                    display: 'flex',
                    flexDirection: 'column', // so title and subtitle stack vertically
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#161617',
                }}
            >
                <Typography
                    variant="h1"
                    color="white"
                    sx={{
                        fontSize: { xs: '2.25rem', md: '3rem' },
                        fontWeight: 300,
                        mb: 2,
                    }}
                >
                    Gaussian Splat
                </Typography>
                
                <Typography
                    variant="subtitle1"
                    color="grey"
                    sx={{
                    fontSize: { xs: '1.125rem', md: '1.25rem' }, // Tailwind text-lg to text-xl
                    maxWidth: 600,
                    fontWeight: 300,
                    }}
                >
                    3D modeling of objects and spaces using gaussian splats
                </Typography>

            </Box>

            
            <Box sx={{ bgcolor: '#161617', alignItems: "center" }}>
                <CardCarousel/>
            </Box>

            <Box
                className="nameBox"
                sx={{
                    minHeight: '40vh', // optional: gives it more vertical space
                    px: 5,
                    py: 10,
                    pb: 0,
                    display: 'flex',
                    flexDirection: 'column', // so title and subtitle stack vertically
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#161617',
                }}
            >
                <Typography
                    variant="h1"
                    color="white"
                    sx={{
                        fontSize: { xs: '2.25rem', md: '3rem' },
                        fontWeight: 300,
                        mb: 2,
                    }}
                >
                    VisionOS
                </Typography>
                
                <Typography
                    variant="subtitle1"
                    color="grey"
                    sx={{
                        fontSize: { xs: '1.125rem', md: '1.25rem' }, // Tailwind text-lg to text-xl
                        maxWidth: 600,
                        fontWeight: 300,
                    }}
                >
                    Interactive application in Apple's latest spatial computing headset
                </Typography>

            </Box>
               
            <Box sx={{ bgcolor: '#161617', alignItems: "center" }}>
                <CardCarousel/>
            </Box>


        

        </>
    )
}