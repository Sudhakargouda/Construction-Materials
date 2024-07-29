import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grow } from '@mui/material';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';
import Chatbott from './Chatbott';

const PaintCalculator = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [paintCoverage, setPaintCoverage] = useState(350); // Square feet per gallon, adjust as needed
  const [paintNeeded, setPaintNeeded] = useState(0);

  const handleCalculate = () => {
    const areaToPaint = (2 * length * height) + (2 * width * height);
    const gallonsNeeded = areaToPaint / paintCoverage;
    const litersNeeded = gallonsNeeded * 3.78541; // Convert gallons to liters
    setPaintNeeded(litersNeeded);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("c14.jpg")', // Replace with a URL of your choice
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // More transparent background
          backdropFilter: 'blur(10px)',
          borderRadius: '10px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: 'none', // Remove the box shadow
          textAlign: 'center',
          animation: 'fadeIn 2s',
          '@media (max-width: 600px)': {
            padding: '15px',
          },
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            marginBottom: '20px', 
            fontFamily: 'Playfair Display, Source Sans Pro, sans-serif', 
            fontWeight: 'bold',
            color: '#333',
            '@media (max-width: 600px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          PAINT CALCULATOR
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            marginBottom: '20px', 
            fontFamily: 'Source Sans Pro, sans-serif',
            fontSize: '1rem',
            color: '#555',
            '@media (max-width: 600px)': {
              fontSize: '0.875rem',
            },
          }}
        >
         
        </Typography>
        <form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <TextField
              label="Length (feet)"
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
              fullWidth
            />
            <TextField
              label="Width (feet)"
              type="number"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
              fullWidth
            />
            <TextField
              label="Height (feet)"
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
              fullWidth
            />
            <Button 
              variant="contained" 
              onClick={handleCalculate} 
              sx={{ 
                marginTop: '20px', 
                backgroundColor: '#1976d2', 
                color: '#fff',
                '@media (max-width: 600px)': {
                  padding: '10px 20px',
                  fontSize: '0.875rem',
                },
              }}
            >
              Calculate Paint Needed
            </Button>
          </Box>
        </form>
        {paintNeeded > 0 && (
          <Grow in={true} timeout={1000}>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: '20px', 
                fontFamily: 'Source Sans Pro, sans-serif',
                fontSize: '1.2rem',
                color: '#333',
                '@media (max-width: 600px)': {
                  fontSize: '1rem',
                },
              }}
            >
              Estimated liters of paint needed: {paintNeeded.toFixed(2)} liters
            </Typography>
          </Grow>
        )}
      </Box>
      <Chatbott />
      <FloatingWhatsAppButton />
    </Box>
  );
};

export default PaintCalculator;
