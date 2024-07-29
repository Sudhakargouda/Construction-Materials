import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Grow } from '@mui/material';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';
import Chatbott from './Chatbott';

const MaterialCalculator = () => {
    const [location, setLocation] = useState('');
    const [area, setArea] = useState('');
    const [estimate, setEstimate] = useState(null);
    const [boxTransparent, setBoxTransparent] = useState(false);

    const handleCalculate = () => {
        const areaValue = parseFloat(area);

        // Example rate values (you can modify these as per actual rates)
        // Rates for pre-construction stage
        const preConstruction = {
            design: 5000, // Fixed cost for design
            borewell: 15000, // Fixed cost for borewell
        };

        // Rates for construction stage, proportional to the area
        const construction = {
            marking: areaValue * 10, // Cost for marking, proportional to area
            sand: areaValue * 20, // Cost for sand, proportional to area
            cement: areaValue * 30, // Cost for cement, proportional to area
            water: areaValue * 5, // Cost for water, proportional to area
            steel: areaValue * 40, // Cost for steel, proportional to area
            bricks: areaValue * 25, // Cost for bricks, proportional to area
            aggregates: areaValue * 10, // Cost for aggregates, proportional to area
            concreteContractor: areaValue * 50, // Cost for concrete contractor, proportional to area
            formwork: areaValue * 15, // Cost for formwork, proportional to area
            plumbingSanitation: areaValue * 10, // Cost for plumbing and sanitation, proportional to area
            electricalWork: areaValue * 20, // Cost for electrical work, proportional to area
            compoundWallDoorEntrance: areaValue * 30, // Cost for compound wall, door, and entrance, proportional to area
            soil: areaValue * 10, // Cost for soil, proportional to area
        };

        // Rates for post-construction stage, proportional to the area
        const postConstruction = {
            painting: areaValue * 10, // Cost for painting, proportional to area
            exteriorFlooring: areaValue * 15, // Cost for exterior flooring, proportional to area
            doorsWindows: areaValue * 20, // Cost for doors and windows, proportional to area
            miscellaneous: areaValue * 5, // Miscellaneous costs, proportional to area
        };

        // Sum up the costs for each stage
        const totalPreConstruction = Object.values(preConstruction).reduce((a, b) => a + b, 0);
        const totalConstruction = Object.values(construction).reduce((a, b) => a + b, 0);
        const totalPostConstruction = Object.values(postConstruction).reduce((a, b) => a + b, 0);

        // Set the estimate state with the calculated values
        setEstimate({
            preConstruction: { total: totalPreConstruction, ...preConstruction },
            construction: { total: totalConstruction, ...construction },
            postConstruction: { total: totalPostConstruction, ...postConstruction },
            grandTotal: totalPreConstruction + totalConstruction + totalPostConstruction, // Grand total of all stages
        });

        // Make the box fully transparent
        setBoxTransparent(true);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("c16.jpg")', // Background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            <Grow in={true} timeout={500}>
                <Box
                    sx={{
                        padding: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0)', // Fully transparent background
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        width: '100%',
                        maxWidth: '800px',
                        textAlign: 'center',
                    }}
                >
                    <Helmet>
                        <title>Construction Cost Calculator</title>
                        <meta name="description" content="Estimate the construction cost based on area and location. Get detailed cost analysis for pre-construction, construction, and post-construction stages." />
                        <meta name="keywords" content="construction cost calculator, building estimation, construction cost, material cost, construction estimation" />
                        <meta name="robots" content="index, follow" />
                        <meta name="author" content="Sudhakar" />
                        <meta property="og:title" content="Construction Cost Calculator" />
                        <meta property="og:description" content="Estimate the construction cost based on area and location. Get detailed cost analysis for pre-construction, construction, and post-construction stages." />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://constructionmart.netlify.app/" />
                        <meta property="og:image" content="https://constructionmart.netlify.app/" />
                    </Helmet>
                    <Typography variant="h3" sx={{ fontFamily: 'Playfair Display, Source Sans Pro, sans-serif', fontWeight: 'bold', fontSize: '2.0rem', marginBottom: '30px' }}>CONSTRUCTION COST</Typography>
                    <form>
                        <Grow in={true} timeout={500}>
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
                        <Grow in={true} timeout={1000}>
                            <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
                        </Grow>
                    </form>
                    <Typography variant="body1" sx={{ marginTop: '20px', animation: 'fadeIn 2s' }}>
                        Disclaimer: Values have been calculated using the average cost per sq.ft in each location. Actual cost will vary depending upon Desired quality and finishing Actual cost of material & labor
                    </Typography>

                    {estimate && (
                        <Grow in={true} timeout={1500}>
                            <Box
                                sx={{
                                    marginTop: '30px',
                                    backgroundColor: boxTransparent ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.5)', // Conditional transparency
                                    padding: '20px',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                }}
                            >
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
                    <Chatbott />
                    <FloatingWhatsAppButton />
                </Box>
            </Grow>
        </Box>
    );
};

export default MaterialCalculator;
