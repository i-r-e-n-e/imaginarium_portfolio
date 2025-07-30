import { Box, Typography } from '@mui/material';
// import heroImage from '@/assets/hero-bg.jpg'; // or wherever your image lives

export const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        px: 3,
        py: 6,
        color: 'white',
      }}
    >
      <Typography
        variant="h1"
        color="black"
        sx={{
          fontSize: { xs: '3rem', md: '6rem' },
          fontWeight: 300,
          mb: 2,
        }}
      >
        New Realities
      </Typography>

      <Typography
        variant="h5"
        color="grey"
        sx={{
          fontSize: { xs: '1.25rem', md: '2rem' },
          maxWidth: 800,
          fontWeight: 300,
        }}
      >
        SCU Imaginarium's explorations of the latest three-dimensional technologies.
      </Typography>
    </Box>
  );
};

export default Hero;
