import ResponsiveAppBar from '../components/navBar'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';




const cardData = [
  {
    img: '/images/kristy-cookie-box.png',
    tag: 'Engineering',
    title: 'Kristy\'s cookie box',
    description:
      'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [
      { name: 'Kristy ', avatar: '/static/images/avatar/1.jpg' },
    ],
  },
  {
    img: '/images/irene-hello-kitty.png',
    tag: 'Product',
    title: 'Irene\'s Hello Kitty',
    description:
      'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    authors: [{ name: 'Irene Chen', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    img: '/images/tierney-smisky.png',
    tag: 'Design',
    title: 'Tierney\'s smiskis',
    description:
      'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
    authors: [{ name: 'Tierney', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    img: '/images/tayo-statue.png',
    tag: 'Company',
    title: "Tayo\'s Statue",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: 'Tayo', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    img: '/images/ryan-luigi.png',
    tag: 'Engineering',
    title: 'Ryan\'s Luigi',
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      { name: 'Ryan', avatar: '/static/images/avatar/4.jpg' },
    ],
  },
  {
    img: '/images/james-chair.png',
    tag: 'Product',
    title: 'James\' chair',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'James', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    img: '/images/trisha-jar.png',
    tag: 'Product',
    title: 'Trisha\'s jar',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'Trisha', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    img: '/images/julianna-pancake.png',
    tag: 'Product',
    title: 'Julianna\'s pancake',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'Julianna', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    img: '/images/james-tree.png',
    tag: 'Product',
    title: 'James\' tree',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'James', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    img: '/images/james-fountain.png',
    tag: 'Product',
    title: 'James\' fountain',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'James', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    img: '/images/vrushabh-wet-wipe.png',
    tag: 'Product',
    title: 'Vrushabh\'s wet wipe',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'Vrushabh', avatar: '/static/images/avatar/2.jpg' }],
  },
  {
    img: '/images/trisha-bacardi.png',
    tag: 'Product',
    title: 'Trisha\'s bacardi',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'Trisha', avatar: '/static/images/avatar/2.jpg' }],
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




export function GaussianSplat() {
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
                <h1>Gaussian Splat</h1>
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
                    What is the Gaussian Splatting?
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
        {/* <Canvas>
          <ambientLight>
            <Suspense fallback={null}>
              <HelloKitty/>
            </Suspense>
          </ambientLight>
          
        </Canvas> */}

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
    </>
  );
}
