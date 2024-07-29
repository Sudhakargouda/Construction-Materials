import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Grow } from '@mui/material';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';
import Chatbott from './Chatbott';

const ConcreteCalculator = () => {
    const [length, setLength] = useState('');
    const [lengthUnit, setLengthUnit] = useState('meter');
    const [breadth, setBreadth] = useState('');
    const [breadthUnit, setBreadthUnit] = useState('meter');
    const [depth, setDepth] = useState('4.5'); // Default to 4.5 inches
    const [grade, setGrade] = useState('M10');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        // Convert dimensions to meters
        const lengthInMeters = lengthUnit === 'feet' ? parseFloat(length) * 0.3048 : parseFloat(length);
        const breadthInMeters = breadthUnit === 'feet' ? parseFloat(breadth) * 0.3048 : parseFloat(breadth);
        const depthInMeters = parseFloat(depth) * 0.0254; // Convert inches to meters

        // Calculate concrete volume in cubic meters
        const concreteVolume = lengthInMeters * breadthInMeters * depthInMeters;

        // Calculate area of slab in square meters
        const areaOfSlab = lengthInMeters * breadthInMeters;

        // Calculate materials required
        const cement = concreteVolume * 7.8; // Assume 1 bag of cement is 0.0347 cubic meters (approximately 7.8 bags per cubic meter)
        const sand = concreteVolume * 0.46; // Assume sand requirement is 46% of concrete volume
        const aggregate = concreteVolume * 0.65; // Assume aggregate requirement is 65% of concrete volume

        setResult({
            concreteVolume: concreteVolume.toFixed(2),
            areaOfSlab: areaOfSlab.toFixed(2),
            cement: cement.toFixed(2),
            sand: sand.toFixed(2),
            aggregate: aggregate.toFixed(2)
        });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url("c15.jpg")', // Background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                position: 'relative', // For positioning FloatingWhatsAppButton
            }}
        >
            <Box
                sx={{
                    padding: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)', // More transparent background
                    backdropFilter: 'blur(8px)',
                    borderRadius: '10px',
                    maxWidth: '600px',
                    width: '100%',
                    boxShadow: 'none', // Remove box shadow
                    textAlign: 'center',
                    animation: 'fadeIn 1.5s',
                }}
            >
                <Typography variant="h3" sx={{ fontFamily: 'Playfair Display, Source Sans Pro, sans-serif', fontWeight: 'bold', fontSize: '2.0rem', marginBottom: '30px' }}>CONCRETE FOR SLABS</Typography>
                <form>
                    <Grow in={true} timeout={1000}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                            <TextField
                                label="Length"
                                type="number"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                sx={{ marginRight: '20px', width: '200px', backgroundColor: '#fff', borderRadius: '5px' }}
                            />
                            <FormControl sx={{ minWidth: 120, backgroundColor: '#fff', borderRadius: '5px' }}>
                                <InputLabel id="length-unit-label">Unit</InputLabel>
                                <Select
                                    labelId="length-unit-label"
                                    id="length-unit-select"
                                    value={lengthUnit}
                                    onChange={(e) => setLengthUnit(e.target.value)}
                                >
                                    <MenuItem value="meter">Meter</MenuItem>
                                    <MenuItem value="feet">Feet</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grow>
                    <Grow in={true} timeout={1500}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                            <TextField
                                label="Breadth"
                                type="number"
                                value={breadth}
                                onChange={(e) => setBreadth(e.target.value)}
                                sx={{ marginRight: '20px', width: '200px', backgroundColor: '#fff', borderRadius: '5px' }}
                            />
                            <FormControl sx={{ minWidth: 120, backgroundColor: '#fff', borderRadius: '5px' }}>
                                <InputLabel id="breadth-unit-label">Unit</InputLabel>
                                <Select
                                    labelId="breadth-unit-label"
                                    id="breadth-unit-select"
                                    value={breadthUnit}
                                    onChange={(e) => setBreadthUnit(e.target.value)}
                                >
                                    <MenuItem value="meter">Meter</MenuItem>
                                    <MenuItem value="feet">Feet</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grow>
                    <Grow in={true} timeout={2000}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                            <TextField
                                label="Depth"
                                type="number"
                                value={depth}
                                onChange={(e) => setDepth(e.target.value)}
                                sx={{ marginRight: '20px', width: '200px', backgroundColor: '#fff', borderRadius: '5px' }}
                            />
                        </Box>
                    </Grow>
                    <Grow in={true} timeout={2500}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                            <FormControl sx={{ minWidth: 120, backgroundColor: '#fff', borderRadius: '5px' }}>
                                <InputLabel id="grade-label">Grade of Concrete</InputLabel>
                                <Select
                                    labelId="grade-label"
                                    id="grade-select"
                                    value={grade}
                                    onChange={(e) => setGrade(e.target.value)}
                                >
                                    <MenuItem value="M10">M10</MenuItem>
                                    <MenuItem value="M15">M15</MenuItem>
                                    <MenuItem value="M20">M20</MenuItem>
                                    <MenuItem value="M25">M25</MenuItem>
                                </Select>       
                            </FormControl>                     
                        </Box>
                    </Grow>
                    <Typography variant="body1" sx={{ marginTop: '20px', animation: 'fadeIn 2s' }}>Grade of concrete M10, M15, M20, M25 depends on ratio of Cement, Sand and Aggregate. M20 is the most common for Home Builders.</Typography>
                    <Grow in={true} timeout={3000}>
                        <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
                    </Grow>
                    <Typography variant="body1" sx={{ marginTop: '20px', animation: 'fadeIn 2s' }}>
                        Disclaimer: Quantity has been calculated using the average values. Actual quantity will vary depending upon densities of sand and coarse aggregate.
                    </Typography>
                </form>
                
                {result && (
                    <Grow in={true} timeout={3500}>
                        <Box sx={{ marginTop: '30px', backgroundColor: 'rgba(255, 255, 255, 0)', padding: '20px', borderRadius: '10px', boxShadow: 'none' }}>
                            <Typography variant="h4">Result</Typography>
                            <Box sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="body1">Concrete Volume: {result.concreteVolume} cubic meters</Typography>
                                <Typography variant="body1">Area of Slab: {result.areaOfSlab} square meters</Typography>
                                <Typography variant="body1">Cement Required: {result.cement} bags</Typography>
                                <Typography variant="body1">Sand Required: {result.sand} tons</Typography>
                                <Typography variant="body1">Aggregate Required: {result.aggregate} tons</Typography>
                            </Box>
                        </Box>                   
                    </Grow>
                )}
              
            </Box>
            {/* Floating WhatsApp Button positioned in the bottom-right corner */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                }}
            >
                <FloatingWhatsAppButton />
                <Chatbott/>
            </Box>
        </Box>
    );
};

export default ConcreteCalculator;
