import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Grid, FormControl, InputLabel, Select, FormControlLabel, Checkbox, useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RefreshIcon from '@mui/icons-material/Refresh';

const countries = [
  { code: '+1', label: 'United States +1' },
  { code: '+91', label: 'India +91' },
  { code: '+44', label: 'United Kingdom +44' },
  { code: '+61', label: 'Australia +61' },
  { code: '+86', label: 'China +86' },
];

const serviceData = [
    {
      value: "BIS / CRS Registration",
      label: "BIS / CRS Registration",
    },
    {
      value: "BIS / ISI Certification",
      label: "BIS / ISI Certification",
    },
    {
      value: "WPC / ETA Approval",
      label: "WPC / ETA Approval",
    },
    {
      value: "BEE Registration",
      label: "BEE Registration",
    },
    {
      value: "EPR Authorization",
      label: "EPR Authorization",
    },
    {
      value: "TEC Certification",
      label: "TEC Certification",
    },
    {
      value: "Trademark Registration",
      label: "Trademark Registration",
    },
    {
      value: "Brand Representation",
      label: "Brand Representation",
    },
];

const howDidYouFindUsOptions = [
  { value: 'search', label: 'Search Engine' },
  { value: 'social_media', label: 'Social Media' },
  { value: 'friend', label: 'From a Friend' },
  { value: 'advertisement', label: 'Advertisement' },
];

const DownloadBrochureForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    countryCode: '+91', // Default country code
    mobile: '',
    service: '',
    message: '',
    howDidYouFindUs: '',
    captcha: '',
    agreement: false,
  });
  const [errors, setErrors] = useState({});
  const [captchaImage, setCaptchaImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};
    // Example validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    // Add more validations as needed
    return errors;
  };

  const fetchCaptchaImage = () => {
    // Fetch the CAPTCHA image from the server
    // Replace 'http://example.com/captcha' with the actual endpoint to fetch the CAPTCHA image
    fetch('http://127.0.0.1:8000/captcha')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch CAPTCHA image');
        }
        return response.blob();
      })
      .then(blob => {
        // Convert the blob to a data URL
        const url = URL.createObjectURL(blob);
        // Update the state with the new CAPTCHA image URL
        setCaptchaImage(url);
      })
      .catch(error => {
        console.error('Error fetching CAPTCHA image:', error);
      });
  };

  const handleRegenerateCaptcha = () => {
    // Fetch new CAPTCHA image
    fetchCaptchaImage();
  };

  useEffect(() => {
    fetchCaptchaImage(); // Fetch captcha image when the component mounts
  }, []); 

  return (
    <Box
        sx={{ 
            background: 'url(images/DownloadBrochureBackground1.webp) rgba(255, 255, 255, 0.5)', 
            backgroundSize: 'cover', 
            backgroundBlendMode: 'overlay', 
            padding: isMobile ? '4rem 24px':'4rem 20vh', 
            borderTop: '1px solid #c6c6c6', 
            borderBottom: '1px solid #c6c6c6'
            }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center'}}>
        Download Brochure
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              sx={{ color: theme.palette.primary.main }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="organisation"
              label="Organisation"
              variant="outlined"
              fullWidth
              value={formData.organisation}
              onChange={handleChange}
              sx={{ color: theme.palette.primary.main }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              sx={{ color: theme.palette.primary.main }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="mobile"
              label="Mobile"
              variant="outlined"
              placeholder='Mobile'
              fullWidth
              value={formData.mobile}
              onChange={handleChange}
              error={Boolean(errors.mobile)}
              helperText={errors.mobile}
              InputProps={{
                startAdornment: (
                    <TextField
                  select
                  name="countryCode"
                  variant="standard"
                  value={formData.countryCode}
                  onChange={handleChange}
                  style={{ minWidth: 100, marginRight: 8 }}
                >
                    {countries.map((country) => (
                      <MenuItem key={country.code} value={country.code}>
                        {country.label}
                      </MenuItem>
                    ))}
                </TextField>
                ),
              }}
              sx={{ color: theme.palette.primary.main }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="service-label">Service</InputLabel>
                <Select
                labelId="service-label"
                name="service"
                value={formData.service}
                onChange={handleChange}
                label="Service"
                sx={{ color: theme.palette.primary.main }}
                >
                <MenuItem value="">Select Service</MenuItem>
                {serviceData.map((service) => (
                    <MenuItem key={service.value} value={service.value}>
                    {service.label}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="how-did-you-find-us-label">How did you find us?</InputLabel>
                <Select
                labelId="how-did-you-find-us-label"
                name="howDidYouFindUs"
                value={formData.howDidYouFindUs}
                onChange={handleChange}
                label="How did you find us?"
                sx={{ color: theme.palette.primary.main }}
                >
                <MenuItem value="">Select Option</MenuItem>
                {howDidYouFindUsOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              sx={{ color: theme.palette.primary.main}}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                <img src={captchaImage} alt="Captcha" />
                <Button variant="outlined" onClick={handleRegenerateCaptcha} sx={{ ml: 1, backgroundColor: '#ffffff' }}>
                <RefreshIcon />
                </Button>
            </Box>
            <TextField
                name="captcha"
                label="Enter CAPTCHA"
                variant="outlined"
                fullWidth
                value={formData.captcha}
                onChange={handleChange}
                sx={{ flex: 1, mr: 1, color: theme.palette.primary.main }}
            />
            </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox name="agreement" checked={formData.agreement} onChange={handleCheckboxChange} />}
              label="I agree to the terms and conditions"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button type="submit" variant="outlined" size='large' sx={{ marginTop: '1rem', color: '#2A72A3'}}>
                Download Brochure
            </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default DownloadBrochureForm;
