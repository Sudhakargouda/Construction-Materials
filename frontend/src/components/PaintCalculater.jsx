import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel, Grow } from '@mui/material';

const PaintCalculator = () => {
    const [wallHeight, setWallHeight] = useState('');
    const [totalWidthOfWalls, setTotalWidthOfWalls] = useState('');
    const [numberOfDoors, setNumberOfDoors] = useState('');
    const [doorLength, setDoorLength] = useState('');
    const [doorWidth, setDoorWidth] = useState('');
    const [numberOfWindows, setNumberOfWindows] = useState('');
    const [windowLength, setWindowLength] = useState('');
    const [windowWidth, setWindowWidth] = useState('');
    const [paintRequired, setPaintRequired] = useState(null);

    const handleCalculate = () => {
        const wallHeightValue = parseFloat(wallHeight);
        const totalWidthOfWallsValue = parseFloat(totalWidthOfWalls);
        const numberOfDoorsValue = parseInt(numberOfDoors);
        const doorLengthValue = parseFloat(doorLength);
        const doorWidthValue = parseFloat(doorWidth);
        const numberOfWindowsValue = parseInt(numberOfWindows);
        const windowLengthValue = parseFloat(windowLength);
        const windowWidthValue = parseFloat(windowWidth);

        // Calculate total area to be painted
        const totalAreaToPaint = (2 * wallHeightValue * totalWidthOfWallsValue) + (numberOfDoorsValue * doorLengthValue * doorWidthValue) + (numberOfWindowsValue * windowLengthValue * windowWidthValue);

        // Calculate paint required (assuming 1 liter covers 10 square feet)
        const paintRequiredValue = totalAreaToPaint / 10;

        setPaintRequired(paintRequiredValue.toFixed(2));
    };

    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                animation: 'fadeIn 2s',
            }}
        >
            <Typography variant="h3" gutterBottom>Paint Calculator</Typography>

            <Grow in={true} timeout={1000}>
                <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField
                        label="Wall Height (feet)"
                        type="number"
                        value={wallHeight}
                        onChange={(e) => setWallHeight(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                    <TextField
                        label="Total Width of Walls (feet)"
                        type="number"
                        value={totalWidthOfWalls}
                        onChange={(e) => setTotalWidthOfWalls(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                    <FormControl sx={{ minWidth: 120, marginBottom: '10px' }}>
                        <InputLabel id="number-of-doors-label">Number of Doors</InputLabel>
                        <Select
                            labelId="number-of-doors-label"
                            id="number-of-doors-select"
                            value={numberOfDoors}
                            onChange={(e) => setNumberOfDoors(e.target.value)}
                        >
                            {[...Array(10).keys()].map(num => (
                                <MenuItem key={num} value={num}>{num}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Door Length (feet)"
                        type="number"
                        value={doorLength}
                        onChange={(e) => setDoorLength(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                    <TextField
                        label="Door Width (feet)"
                        type="number"
                        value={doorWidth}
                        onChange={(e) => setDoorWidth(e.target.value)}
                        sx={{ marginBottom: '20px' }}
                    />
                </Box>
            </Grow>

            <Grow in={true} timeout={1500}>
                <Box sx={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <FormControl sx={{ minWidth: 120, marginBottom: '10px' }}>
                        <InputLabel id="number-of-windows-label">Number of Windows</InputLabel>
                        <Select
                            labelId="number-of-windows-label"
                            id="number-of-windows-select"
                            value={numberOfWindows}
                            onChange={(e) => setNumberOfWindows(e.target.value)}
                        >
                            {[...Array(10).keys()].map(num => (
                                <MenuItem key={num} value={num}>{num}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Window Length (feet)"
                        type="number"
                        value={windowLength}
                        onChange={(e) => setWindowLength(e.target.value)}
                        sx={{ marginBottom: '10px' }}
                    />
                    <TextField
                        label="Window Width (feet)"
                        type="number"
                        value={windowWidth}
                        onChange={(e) => setWindowWidth(e.target.value)}
                        sx={{ marginBottom: '20px' }}
                    />
                </Box>
            </Grow>

            <Grow in={true} timeout={2000}>
                <Button variant="contained" onClick={handleCalculate} sx={{ marginBottom: '20px' }}>Calculate</Button>
            </Grow>

            {paintRequired && (
                <Grow in={true} timeout={2500}>
                    <Box sx={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Typography variant="h4">Paint Required</Typography>
                        <Typography variant="body1">Paint to Complete Construction: {paintRequired} liters</Typography>
                    </Box>
                </Grow>
            )}
        </Box>
    );
};

export default PaintCalculator;
