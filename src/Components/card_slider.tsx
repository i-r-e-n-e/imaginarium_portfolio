// CardCarousel.tsx
import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

const cardData = [
  {
    title: 'Colorful Balls',
    img: '/images/Izzy-colorful-balls.png',
    description: 'Colorful balls falling from the sky.',
  },
  {
    title: 'Hidden Box',
    img: '/images/Izzy-hidden-box.png',
    description: 'A box that reveals hidden objects.',
  },
  {
    title: 'Bubbles',
    img: '/images/Riana-bubbles.png',
    description: 'Virtual bubbles to pop!',
  },
  {
    title: 'Portal Doors',
    img: '/images/Riana-portal-doors.png',
    description: 'Portals to other worlds.',
  },
  {
    title: 'Disco Ball',
    img: '/images/megu-disco-ball.png',
    description: 'Water-textured disco lighting.',
  },
];

export default function CardCarousel() {
  return (
    <Box sx={{ overflowX: 'auto', px: 2, py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              minWidth: 280,
              flexShrink: 0,
              scrollSnapAlign: 'start',
            }}
          >
            <Card sx={{ borderRadius: 2, height: '100%' }}>
              <CardMedia
                component="img"
                height="160"
                image={card.img}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
