import React from 'react';
import { Typography, Grid, Box, Link, TextField, Button, List, ListItem, useMediaQuery } from '@mui/material';
import { Facebook, Pinterest, Instagram, LinkedIn, YouTube, LocationOnOutlined, WhatsApp, MailOutline } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import { BrandLiaisonLogo } from '../../utils/frontend/ImageRender';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const handleAddressClick = () => {
        window.open('https://www.google.com/maps/place/Brand+Liaison+India+Private+Limited/@28.6365871,77.2826165,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfca9ee9d65df:0x993a638ba380a2a8!8m2!3d28.6365871!4d77.2851914!16s%2Fg%2F11b8b2p00t?entry=ttu', '_blank');
    };
  return (
    <Box
        component="footer"
        sx={{ 
            bgcolor: 'background.default', 
            borderTop: '1px solid', // Add top border
            borderColor: 'divider', // Use the color defined in the theme for dividers
            [theme.breakpoints.up('sm')]: {
                padding: '0 10vh',
            },
        }}
    >
      <Grid container spacing={4} sx={{py: 5, px: 3}}>
        <Grid item lg={4} md={7}>
          <Box>
            <div className="fw-logo">
              <Link href="/" color="inherit">
                <BrandLiaisonLogo sx={{height: '3rem', width: 'auto'}}/>
              </Link>
            </div>
            <Typography variant="body1" gutterBottom>
              When an unknown printer took a galley of type aawer awtnd scrambled it to make a type specimen book.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={2} md={5} sm={6}>
          <Box>
          <Box sx={{ position: 'relative' }}>
            <Typography variant="h6" gutterBottom>
                Quick Links
            </Typography>
            <Box
                sx={{
                left: 0,
                bottom: -5,
                width: '64px',
                height: '0.35rem',
                backgroundColor: '#2A72A3',
                borderRadius: '4px',
                mb: 2,
                }}
            />
            </Box>
            <List component="nav" aria-label="quick links" sx={{ listStyleType: 'none', p: 0 }}>
              <ListItem button>
                <Link href="/about-us">About BL-India</Link>
              </ListItem>
              <ListItem button>
                <Link href="/services">Our Services</Link>
              </ListItem>
              <ListItem button>
                <Link href="/notifications">Govt. Notifications</Link>
              </ListItem>
              <ListItem button>
                <Link href="/clients">Important Downloads</Link>
              </ListItem>
              <ListItem button>
                <Link href="/clients">Our Clients</Link>
              </ListItem>
              <ListItem button>
                <Link href="/clients">Our Events</Link>
              </ListItem>
              <ListItem button>
                <Link href="/clients">Careers @ BL-India</Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item lg={2} md={5} sm={6}>
          <Box>
          <Box sx={{ position: 'relative' }}>
            <Typography variant="h6" gutterBottom>
                Important Links
            </Typography>
            <Box
                sx={{
                left: 0,
                bottom: -5,
                width: '64px',
                height: '0.35rem',
                backgroundColor: '#2A72A3',
                borderRadius: '4px',
                mb: 2
                }}
            />
            </Box>
            <List component="nav" aria-label="menu links" sx={{ listStyleType: 'none', p: 0 }}>
              <ListItem button>
                <Link href="partnership">Partner with us</Link>
              </ListItem>
              <ListItem button>
                <Link href="press-media">Press Media</Link>
              </ListItem>
              <ListItem button>
                <Link href="knowledge-base">Knowledge Base</Link>
              </ListItem>
              <ListItem>
                <Link href="/holiday-list">Holiday List</Link>
              </ListItem>
              <ListItem button>
                <Link href="/disclaimer">Website Disclaimer</Link>
              </ListItem>
              <ListItem button>
                <Link href="/terms-of-service">Terms of Service</Link>
              </ListItem>
              <ListItem button>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item lg={4} md={7}>
          <Box>
          <Box sx={{ position: 'relative' }}>
            <Typography variant="h6" gutterBottom>
                Contact Us
            </Typography>
            <Box
                sx={{
                left: 0,
                bottom: -5,
                width: '64px',
                height: '0.35rem',
                backgroundColor: '#2A72A3',
                borderRadius: '4px',
                mb: 2,
                }}
            />
            </Box>
            <div className="footer-newsletter">
              <Typography variant="body1" gutterBottom sx={{ typography: 'BrandText' }}>Feel free to contact us for any queries.</Typography>
                <div className="footer-info">
                <ul className="list-wrap" style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div className="icon" style={{ marginRight: '8px' }}>
                            <LocationOnOutlined sx={{ fontSize: '2rem' }} />
                        </div>
                        <div className="content">
                            <Typography variant="body1" gutterBottom sx={{ typography: 'BrandText' }}>
                                <strong>Brand Liaison India Pvt. Ltd.</strong><br />
                                110, Sharma Complex, A-2, Guru Nanak Pura, Laxmi Nagar, New Delhi (East) 110092, India
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ typography: 'BrandText' }}>
                                Landmark: 
                                Nirman Vihar Metro Station - Gate No. 1 / Skywalk Exit
                                (150 meters / 2 minutes walk)
                            </Typography>
                            <Link
                            href="https://www.google.com/maps/place/Brand+Liaison+India+Private+Limited/@28.6365871,77.2826165,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfca9ee9d65df:0x993a638ba380a2a8!8m2!3d28.6365871!4d77.2851914!16s%2Fg%2F11b8b2p00t?entry=ttu"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleAddressClick}
                            >
                            View on Google Maps
                            </Link>
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="icon" style={{ marginRight: '8px' }}>
                            <WhatsApp sx={{ fontSize: '2rem' }} />
                        </div>
                        <div className="content">
                            <Link href="https://wa.me/919810363988">+91-9810363988</Link>
                        </div>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="icon" style={{ marginRight: '8px' }}>
                            <MailOutline sx={{ fontSize: '2rem' }} />
                        </div>
                        <div className="content">
                            <Link href="mailto:info@bl-india.com">info@bl-india.com</Link>
                        </div>
                    </li>
                </ul>
                </div>
              <Box mt={1} className="footer-social footer-social-two" sx={{ display: 'flex', gap: '8px' }}>
                <Link href="https://www.facebook.com/BrandLiaisonIndia" target="_blank" rel="noopener noreferrer"><Facebook sx={{ fontSize: '2rem' }} /></Link>
                <Link href="https://twitter.com/BrandLiaison" target="_blank" rel="noopener noreferrer"><XIcon sx={{ fontSize: '2rem' }} /></Link>
                <Link href="https://www.linkedin.com/company/brand-liaison-india-pvt-ltd" target="_blank" rel="noopener noreferrer"><LinkedIn sx={{ fontSize: '2rem' }} /></Link>
                <Link href="https://www.instagram.com/brandliaison_/" target="_blank" rel="noopener noreferrer"><Instagram sx={{ fontSize: '2rem' }} /></Link>
                <Link href="https://in.pinterest.com/brandliaison/" target="_blank" rel="noopener noreferrer"><Pinterest sx={{ fontSize: '2rem' }} /></Link>
                <Link href="https://www.youtube.com/channel/UCJBaZLfC-tnQiQvqJEk-y7w/videos" target="_blank" rel="noopener noreferrer"><YouTube sx={{ fontSize: '2rem' }} /></Link>
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Box
            sx={{
                color: 'text.primary',
                py: 5,
                borderTop: '1px solid', // Add top border
                borderColor: 'divider', // Use the color defined in the theme for dividers
            }}
        >
            <Typography variant="body2" align="center" gutterBottom>
                Copyright © 2024 - Brand Liaison India Private Limited | All Right Reserved
            </Typography>
        </Box>

    </Box>
  );
};

export default Footer;
