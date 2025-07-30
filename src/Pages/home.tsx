import Navigation from '../components/navigation'
import { Carousel } from "../components/carousel"
import CardCarousel from "../components/card_slider"

import Box from '@mui/material/Box'
import './home.css'
import { slides } from "./data/carouselData.json"


export function Home() {
    return (
        <>
            <Navigation />
            <Box 
                className="pictureBox" 
                sx={{
                    padding: 7
                }}
            >
                <h1>New Realities</h1>
                <br/>
                <p>SCU IMaginarium's explorations of the latest three-dimensional technologies.</p>
            </Box>
            <Box
                className="nameBox"
                sx={{
                    pt: 5,
                    pl: 5,
                    pr: 5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#161617'
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
            <Box sx={{ bgcolor: '#161617', alignItems: "center" }}>
                {/* <Carousel data={slides}/> */}
                <CardCarousel/>
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
                        VisionOS
                    </h2>
                </div>
                <div>
                    <p>
                        Interactive applications in Apple's latest spatial computing headset
                    </p>
                </div>
            </Box>
               
            <Carousel data={slides}/>


        

        </>
    )
}