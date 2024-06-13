import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Grow } from '@mui/material';

const MaterialCalculator = () => {
    const [location, setLocation] = useState('');
    const [area, setArea] = useState('');
    const [estimate, setEstimate] = useState(null);

    const handleCalculate = () => {
        const areaValue = parseFloat(area);

        // Example rate values (you can modify these as per actual rates)
        const preConstruction = {
            design: 5000,
            borewell: 15000,
        };
        
        const construction = {
            marking: areaValue * 10,
            sand: areaValue * 20,
            cement: areaValue * 30,
            water: areaValue * 5,
            steel: areaValue * 40,
            bricks: areaValue * 25,
            aggregates: areaValue * 10,
            concreteContractor: areaValue * 50,
            formwork: areaValue * 15,
            plumbingSanitation: areaValue * 10,
            electricalWork: areaValue * 20,
            compoundWallDoorEntrance: areaValue * 30,
            soil: areaValue * 10,
        };
        
        const postConstruction = {
            painting: areaValue * 10,
            exteriorFlooring: areaValue * 15,
            doorsWindows: areaValue * 20,
            miscellaneous: areaValue * 5,
        };

        const totalPreConstruction = Object.values(preConstruction).reduce((a, b) => a + b, 0);
        const totalConstruction = Object.values(construction).reduce((a, b) => a + b, 0);
        const totalPostConstruction = Object.values(postConstruction).reduce((a, b) => a + b, 0);

        setEstimate({
            preConstruction: { total: totalPreConstruction, ...preConstruction },
            construction: { total: totalConstruction, ...construction },
            postConstruction: { total: totalPostConstruction, ...postConstruction },
            grandTotal: totalPreConstruction + totalConstruction + totalPostConstruction,
        });
    };

    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                animation: 'fadeIn 2s',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                maxWidth: '600px',
                margin: 'auto',
                marginTop: '30px',
            }}
        >
            <Typography variant="h3" gutterBottom>Construction Cost Calculator</Typography>
            <form>
                <Grow in={true} timeout={1000}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                        <FormControl sx={{ minWidth: 200, marginRight: '20px' }}>
                            <InputLabel id="location-label">Select Location</InputLabel>
                            <Select
                                labelId="location-label"
                                id="location-select"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                label="Select Location"
                            >
                                <MenuItem value="">Select</MenuItem>
                                <MenuItem value="urban">Urban</MenuItem>
                                <MenuItem value="metro">Metro</MenuItem>
                                <MenuItem value="semi-urban">Semi-Urban</MenuItem>
                                <MenuItem value="district">District</MenuItem>
                                <MenuItem value="taluka">Taluka</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Enter Area (sqft)"
                            type="number"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            sx={{ backgroundColor: '#fff', borderRadius: '5px', width: '150px' }}
                        />
                    </Box>
                </Grow>
                <Grow in={true} timeout={1500}>
                    <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
                </Grow>
            </form>
            <Typography variant="body1" sx={{ marginTop: '20px', animation: 'fadeIn 2s' }}>
                Disclaimer: Values have been calculated using the average cost per sq.ft in each location. Actual cost will vary depending upon Desired quality and finishing Actual cost of material & labor
            </Typography>

            {estimate && (
                <Grow in={true} timeout={2000}>
                    <Box sx={{ marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Typography variant="h4">Estimation Details</Typography>
                        
                        <Box sx={{ marginTop: '20px' }}>
                            <Typography variant="h6">Pre-construction Stage Total: Rs {estimate.preConstruction.total}</Typography>
                            {Object.entries(estimate.preConstruction).map(([key, value]) => {
                                if (key !== 'total') {
                                    return <Typography key={key} sx={{ animation: 'fadeIn 2s' }}>{key}: Rs {value}</Typography>;
                                }
                                return null;
                            })}
                        </Box>
                        
                        <Box sx={{ marginTop: '20px' }}>
                            <Typography variant="h6">Construction Stage Total: Rs {estimate.construction.total}</Typography>
                            {Object.entries(estimate.construction).map(([key, value]) => {
                                if (key !== 'total') {
                                    return <Typography key={key} sx={{ animation: 'fadeIn 2s' }}>{key}: Rs {value}</Typography>;
                                }
                                return null;
                            })}
                        </Box>
                        
                        <Box sx={{ marginTop: '20px' }}>
                            <Typography variant="h6">Post-construction Stage Total: Rs {estimate.postConstruction.total}</Typography>
                            {Object.entries(estimate.postConstruction).map(([key, value]) => {
                                if (key !== 'total') {
                                    return <Typography key={key} sx={{ animation: 'fadeIn 2s' }}>{key}: Rs {value}</Typography>;
                                }
                                return null;
                            })}
                        </Box>
                        
                        <Typography variant="h5" sx={{ marginTop: '20px', animation: 'fadeIn 2s' }}>Total Estimation: Rs {estimate.grandTotal}</Typography>
                    </Box>
                </Grow>
            )}
        </Box>
    );
};

export default MaterialCalculator;
