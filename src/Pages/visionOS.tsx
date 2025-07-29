import ResponsiveAppBar from '../components/navBar'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';



// we probalbly want github link on a separate field
const cardData = [
  {
    img: '/images/Izzy-colorful-balls.png',
    tag: 'Fun',
    title: 'Colorful balls falling',
    description:
      'Colorful balls falling from the sky, and picture expanding into the screen and collapsing away. https://github.com/izzygperez/colorful-balls-with-image-creation',
    authors: [
      { name: 'Izzy Perez', avatar: '/static/images/avatar/1.jpg' },
    ],
  },
  {
    img: '/images/Izzy-hidden-box.png',
    tag: 'Fun',
    title: 'Hidden Box',
    description:
      'A box with invisible external walls, when top is pressed opens to show objects inside. https://github.com/izzygperez/xcode-hidden-box',
    authors: [{ name: 'Izzy Perez', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    img: '/images/Riana-bubbles.png',
    tag: 'Fun',
    title: 'Bubbles',
    description:
      'Generates bubbles in virtual space that user can pop. https://github.com/Riana-S/Bubbles-visionOS',
    authors: [{ name: 'Riana Santos', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Utility',
    title: "Guitar Chord Heads Up Display",
    description:
      "A Passthrough heads-up display that shows live chords and lyrics to songs. NO GITHUB",
    authors: [{ name: 'Beatrice Hackman', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    img: '/images/Riana-portal-doors.png',
    tag: 'Fun',
    title: 'Portal Doors',
    description:
      "Inspired by the movie Dr. Strange, program generates three portal doors that allow user to peer into a different environment around the world. https://github.com/Riana-S/RotundaGateway",
    authors: [
      { name: 'Riana Santos', avatar: '/static/images/avatar/4.jpg' },
    ],
  },
  {
    img: '/images/megu-disco-ball.png',
    tag: 'Fun',
    title: 'Disco Ball',
    description:
      'A Disco ball light effect created in RealityComposerPro in a water-like material. https://github.com/MeguKanzawa/DiscoBall2',
    authors: [{ name: 'Megu Kanzawa', avatar: '/static/images/avatar/2.jpg' }],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

function Author({ authors }: { authors: { name: string; avatar: string }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >  
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}



export function VisionOS() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
    null,
  );

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <>
        <ResponsiveAppBar/>
        <Box 
                className="pictureBox" 
                sx={{
                    padding: 7
                }}
            >
                <h1>VisionOS</h1>
            </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box //only appears on extra small screens, hides on small and larger
            sx={{
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
            }}
        >
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 2,
                p: 5,
            }}
        >
            <Box sx={{ flex: 1 }}>
                <img
                    src="https://cdn.abcotvs.com/dip/images/14296939_apple-vision-pro-getty-img.jpg"
                    alt="Image of an Apple Vision Pro"
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h4" gutterBottom>
                    What is the Apple Vision Pro?
                </Typography>
                <Typography variant="body1">
                    The Apple Vision Pro is Apple's first headset device. It is redefining the possibilities of mixed reality and spatial computing.
                    <br/>
                    <br/>
                    It runs VisionOS, a custom operating system with support for developers to build their own immersive experiences.
                </Typography>
            </Box>
        </Box>

        {/* section header */}
        <Box
            sx={{
                width: '100%',
                backgroundColor: 'lightgray',
                padding: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                Our Projects
            </Typography>
        </Box>
        <Box sx={{ px: { xs: 2, sm: 4, md: 6 }}}> 
          <Grid container spacing={2} columns={12}> 
                  {cardData.map((card, index) => (
                      <Grid key={index} size={{ xs: 12, md: 6 }}>
                          <SyledCard
                              variant="outlined"
                              onFocus={() => handleFocus(index)}
                              onBlur={handleBlur}
                              tabIndex={index}
                              className={focusedCardIndex === index ? 'Mui-focused' : ''}
                          >
                              <CardMedia
                                  component="img"
                                  image={card.img}
                                  alt={card.title}
                                  sx={{
                                      aspectRatio: '16 / 9',
                                      borderBottom: '1px solid',
                                      borderColor: 'divider',
                                  }}
                              />
                              <SyledCardContent>
                                  <Typography gutterBottom variant="caption" component="div">
                                      {cardData[0].tag}
                                  </Typography>
                                  <Typography variant="h5" gutterBottom>
                                      {card.title}
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                      {card.description}
                                  </Typography>
                                  <AvatarGroup max={3}>
                                      {card.authors.map((author) => (
                                          <Avatar key={author.name} src={author.avatar} alt={author.name} />
                                      ))}
                                  </AvatarGroup>

                              </SyledCardContent>
                          </SyledCard>
                      </Grid>
                  )
              )}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
