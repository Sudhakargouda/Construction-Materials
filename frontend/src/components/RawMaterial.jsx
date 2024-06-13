import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grow } from '@mui/material';

const MaterialCalculator = () => {
    const [area, setArea] = useState('');
    const [cement, setCement] = useState('');
    const [sand, setSand] = useState('');
    const [stoneAggregates, setStoneAggregates] = useState('');
    const [bricks, setBricks] = useState('');
    const [reinforcementSteel, setReinforcementSteel] = useState('');

    const handleCalculate = () => {
        const areaValue = parseFloat(area);

        // New formulae for material calculations
        const bagsOfCement = areaValue * 0.05; // Assume 1 bag of cement covers 50 sqft
        const sandInTons = areaValue * 0.003; // Assume sand requirement is 0.003 tons per sqft
        const stoneAggregatesInCft = areaValue * 0.02; // Assume stone aggregates requirement is 0.02 cubic feet per sqft
        const bricksQuantity = areaValue * 6; // Assuming 6 bricks per sqft
        const reinforcementSteelInKg = areaValue * 3; // Assume reinforcement steel requirement is 3 kg per sqft

        setCement(bagsOfCement.toFixed(2));
        setSand(sandInTons.toFixed(2));
        setStoneAggregates(stoneAggregatesInCft.toFixed(2));
        setBricks(bricksQuantity.toFixed(0));
        setReinforcementSteel(reinforcementSteelInKg.toFixed(2));
    };

    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                animation: 'fadeIn 2s',
                backgroundImage: `url('your-background-image-url')`, // Add your background image URL here
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', // Ensure the background covers the entire page height
            }}
        >
            <Typography variant="h3" gutterBottom style={{ color: '#333' }}>Raw Material Calculator for Construction</Typography>
            <Grow in={true} timeout={1000}>
                <TextField
                    label="Enter Area (sqft)"
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    sx={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '5px' }}
                />
            </Grow>
            <Grow in={true} timeout={1500}>
                <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
            </Grow>
            <Typography variant="body1" sx={{ marginTop: '20px', animation: 'fadeIn 2s' }}>Disclaimer:
Load bearing brick wall thickness of 23cm (9 inches) in cement mortar 1:6
Plaster in cement mortar 1:4</Typography>


            {cement && (
                <Grow in={true} timeout={2000}>
                    <Box sx={{ marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Typography variant="h4">Material Quantities</Typography>
                        <Typography variant="body1">Bags of Cement: {cement}</Typography>
                        <Typography variant="body1">Sand (Tons): {sand}</Typography>
                        <Typography variant="body1">Stone Aggregates (Cft): {stoneAggregates}</Typography>
                        <Typography variant="body1">Bricks: {bricks}</Typography>
                        <Typography variant="body1">Reinforcement Steel (kg): {reinforcementSteel}</Typography>
                    </Box>
                </Grow>
            )}
        </Box>
    );
};

export default MaterialCalculator;
