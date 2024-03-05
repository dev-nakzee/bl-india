import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box, Grid, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
const TestimonialSection = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            companyName: 'ABC Inc.',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ex vel velit accumsan fermentum nec quis elit.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            companyName: 'XYZ Corp.',
            message: 'Vivamus vitae tortor vel leo elementum tempor. Proin commodo erat id libero congue, id dapibus justo fermentum.',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            companyName: '123 Ltd.',
            message: 'Duis vehicula dui nec blandit volutpat. Nullam a odio vitae turpis volutpat feugiat. Quisque suscipit felis id dictum cursus.',
        },
    ];

    return (
      <Box         
        sx={{

        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Box position="relative">
              <Carousel
                  indicators={false}
                  navButtonsAlwaysVisible
                  navButtonsProps={{ // Style for navigation icons
                      style: {
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          color: '#000',
                          borderRadius: '50%',
                          padding: '8px',
                          margin: '0 10px',
                      }
                  }}
              >
                  {testimonials.map((testimonial) => (
                      <Paper key={testimonial.id} sx={{mx: 10}}>
                          <Typography variant="h6">{testimonial.name}</Typography>
                          <Typography variant="body2">{testimonial.companyName}</Typography>
                          <Typography variant="subtitle2">{testimonial.message}</Typography>
                      </Paper>
                  ))}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default TestimonialSection;
