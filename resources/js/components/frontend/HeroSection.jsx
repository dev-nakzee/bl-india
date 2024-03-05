import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { HeroImage } from '../../utils/frontend/ImageRender';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('All');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Add your search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: 'calc(80vh - 64px)',
        background: isMobile ? 'url(images/HeroBackground.webp) rgba(255, 255, 255, 0.65)' : 'url(images/HeroBackground.webp) rgba(255, 255, 255, 0.75)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        padding: isMobile ? '24px' : '0 10vh',
      }}
    >
      <Box
        sx={{
          width: isMobile ? '100%' : '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'left',
          padding: isMobile ? '0' : '0 24px',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Launch your business in India effortlessly
        </Typography>
        <Typography variant="h4" gutterBottom>
          Discover, apply, and secure essential approvals hassle-free with Brand Liaison
        </Typography>
        <Typography variant="body1" gutterBottom>
          Search for compliance for your business / products:
        </Typography>
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <TextField
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search..."
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <TextField
                  select
                  value={selectedOption}
                  onChange={handleOptionChange}
                  variant="standard"
                  style={{ minWidth: 100, marginRight: 8 }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Option1">Option 1</MenuItem>
                  <MenuItem value="Option2">Option 2</MenuItem>
                </TextField>
              ),
              endAdornment: (
                <IconButton
                  color="primary"
                  onClick={handleSearchButtonClick}
                >
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{ backgroundColor: '#ffffff'}}
          />
        </Box>
      </Box>
      {!isMobile && (
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="images/HeroImage.webp"
            alt="Hero Image"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          />
          {/* <HeroImage sx={{ width: '80%', height: 'auto', objectFit: 'cover' }}/> */}
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;
