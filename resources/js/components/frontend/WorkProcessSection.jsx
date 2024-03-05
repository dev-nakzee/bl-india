import React from 'react';
import { Box, Typography, Grid, Button, useMediaQuery, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { createTheme } from '@mui/material/styles';
import { Parallax } from 'react-parallax'; // Import the Parallax component
import { TopArrow, BottomArrow } from '../../utils/frontend/ImageRender';

const theme = createTheme();
const WorkProcessSection = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Parallax
            bgImage="images/WorkProcessBackground.webp"
            strength={500} // Specify the strength of the parallax effect
            style={{ backgroundColor: 'rgba(42,114,163, 0.5)' }} // Add RGBA overlay style
        >
            <Box
                sx={{
                    padding: isMobile ? '4rem 24px' : '4rem 20vh',
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#ffffff', pb: 4}}>
                    Our Work Process
                </Typography>
                <Grid container spacing={5} sx={{pb: isMobile ? 10 : 10 }}>
                    <Grid item xs={12} sm={2}>
                        {/* Step 1: Register on portal */}
                        <Box textAlign="center" sx={{
                            background: '#ffffff', 
                            p:1, 
                            borderRadius: isMobile ? '10px' : '5%', 
                            minHeight: isMobile ? 'auto': '124px', 
                            position: 'relative'
                            }}>
                            <Typography variant="h6">Step 1</Typography>
                            <Typography>Register on BL & Compliance Portal</Typography>
                            <BottomArrow 
                              sx={{
                                width: '5rem',
                                height: 'auto',
                                position: isMobile ? null : 'absolute',
                                right: '-2.5rem',
                                bottom: '-0.2rem',
                                display: isMobile ? 'none': 'hidden',
                              }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {/* Step 2: Preparation of Documents */}
                        <Box textAlign="center" sx={{
                            background: '#ffffff', 
                            p:1, 
                            borderRadius: isMobile ? '10px' : '5%', 
                            minHeight: isMobile ? 'auto': '124px', 
                            position: 'relative'
                            }}>
                            <TopArrow 
                              sx={{
                                width: '5rem',
                                height: 'auto',
                                position: isMobile ? null : 'absolute',
                                right: '-2.5rem',
                                top: '-0.2rem',
                                display: isMobile ? 'none': 'hidden',
                              }}
                            />
                            <Typography variant="h6">Step 2</Typography>
                            <Typography>Preparation of Documents for Compliance</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {/* Step 3: Testing & Audit */}
                             <Box textAlign="center" sx={{
                            background: '#ffffff', 
                            p:1, 
                            borderRadius: isMobile ? '10px' : '5%', 
                            minHeight: isMobile ? 'auto': '124px', 
                            position: 'relative'
                            }}>
                            <BottomArrow 
                              sx={{
                                width: '5rem',
                                height: 'auto',
                                position: isMobile ? null : 'absolute',
                                right: '-2.5rem',
                                bottom: '-0.2rem',
                                display: isMobile ? 'none': 'hidden',
                              }}
                            />
                            <Typography variant="h6">Step 3</Typography>
                            <Typography>Testing & Audit (If required) for Compliance</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {/* Step 4: Submission of Documents */}
                             <Box textAlign="center" sx={{
                            background: '#ffffff', 
                            p:1, 
                            borderRadius: isMobile ? '10px' : '5%', 
                            minHeight: isMobile ? 'auto': '124px', 
                            position: 'relative'
                            }}>
                          <TopArrow 
                              sx={{
                                width: '5rem',
                                height: 'auto',
                                position: isMobile ? null : 'absolute',
                                right: '-2.5rem',
                                top: '-0.2rem',
                                display: isMobile ? 'none': 'hidden',
                              }}
                            />
                            <Typography variant="h6">Step 4</Typography>
                            <Typography>Submission of Documents to Authorities</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {/* Step 1: Register on portal */}
                             <Box textAlign="center" sx={{
                            background: '#ffffff', 
                            p:1, 
                            borderRadius: isMobile ? '10px' : '5%', 
                            minHeight: isMobile ? 'auto': '124px', 
                            position: 'relative'
                            }}>
                            <BottomArrow 
                              sx={{
                                width: '5rem',
                                height: 'auto',
                                position: isMobile ? null : 'absolute',
                                right: '-2.5rem',
                                bottom: '-0.2rem',
                                display: isMobile ? 'none': 'hidden',
                              }}
                            />
                            <Typography variant="h6">Step 5</Typography>
                            <Typography>Liaison with Authorities to complete process</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        {/* Step 2: Preparation of Documents */}
                        <Box textAlign="center" sx={{
                            background: '#ffffff', 
                            p:1, 
                            borderRadius: isMobile ? '10px' : '5%', 
                            minHeight: isMobile ? 'auto': '124px', 
                            position: 'relative'
                            }}>
                            <Typography variant="h6">Step 6</Typography>
                            <Typography>Grant of Compliance Certificate or Document</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        margin: isMobile ? '10px' : '2rem',
                        border: '1px solid #808080',
                        padding: '2rem 2rem',
                        textAlign: 'center',
                        borderRadius: '1rem',
                        backgroundColor: '#ffffff',
                    }}
                >
                    <Grid container alignItems="center">
                        <Grid item>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ mr: 1 }}>
                                    <PhoneIcon sx={{ fontSize: 36 }} />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" color="inherit">Call For More Info</Typography>
                                    <Typography variant="h6">       
                                        <Link href="https://wa.me/919810363988">+91-9810363988</Link>
                                    </Typography>
                                </Box>
                                <Box sx={{px: 6, textAlign: 'center', display: 'flex'}}>
                                    <Typography variant={isMobile ? 'h5':'h4'} sx={{fontWeight: 500}}>Let’s connect for a Free Consultation</Typography>
                                </Box>
                                { isMobile ? null : (<Box sx={{alignContent: 'left', display: 'block'}}>
                                    <Button variant="contained" color="primary" href="/contact">Contact Us</Button>
                                </Box>) }
                            </Box>
                            { isMobile ? (<Box sx={{textAlign: 'center', display: 'block'}}>
                                    <Button variant="contained" color="primary" href="/contact">Contact Us</Button>
                                </Box>) : null }
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Parallax>
    );
};

export default WorkProcessSection;
