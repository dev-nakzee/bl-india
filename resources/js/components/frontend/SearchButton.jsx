import React, { useState } from 'react';
import { IconButton, Box, TextField, Button, MenuItem} from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

const SearchButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedOption, setSelectedOption] = useState('All');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchText('');
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for:', searchText);
  };

  return (
    <Box position="relative">
      {isOpen? 
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      :
      <IconButton onClick={handleOpen}>
        <SearchIcon />
      </IconButton>}
     
      {isOpen && (
        <Box
            sx={{
                position: 'absolute',
                top: '-0.5rem',
                right: '100%',
                background: '#FFFFFF',
                display: 'flex',
                minWidth: '75vh',
            }}
        >
        <Box
          sx={{
            backgroundColor: '#ffffff',
            minWidth: '75vh',
          }}
        >
          <TextField
            value={searchText}
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
                  onClick={handleSearch}
                >
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{ backgroundColor: '#ffffff'}}
          />
        </Box>
          
        </Box>
      )}
    </Box>
  );
};

export default SearchButton;
