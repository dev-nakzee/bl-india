import React from 'react';
import { Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { BisLogo, IsiLogo, WpcLogo, BeeLogo, EprLogo, TecLogo, TmrLogo, BrsLogo } from '../../utils/frontend/IconRender'; // Import the service icons

const serviceData = [
  {
    icon: <BisLogo sx={{ width: '4rem', height: 'auto' }} />,
    title: "BIS / CRS Registration",
    description: "For IT & Electronic Products",
  },
  {
    icon: <IsiLogo sx={{ width: '4rem', height: 'auto' }} />,
    title: "BIS / ISI Certification",
    description: "For Various Product Categories",
  },
  {
    icon: <WpcLogo sx={{ width: '4rem', height: 'auto' }} />,
    title: "WPC / ETA Approval",
    description: "For Wi-Fi & Bluetooth enabled Products",
  },
  {
    icon: <BeeLogo sx={{ width: '4rem', height: 'auto' }} />,
    title: "BEE Registration",
    description: "For Energy Consuming Appliances",
  },
  {
    icon: <EprLogo sx={{ width: '4rem', height: 'auto' }} />,
    title: "EPR Authorization",
    description: "For Electronic & Plastic Waste Products",
  },
  {
    icon: <TecLogo sx={{ width: '4rem', height: 'auto' }} />,
    title: "TEC Certification",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <TmrLogo sx={{ width: '4rem', height: 'auto' }} />,
    title: "Trademark Registration",
    description: "For Brand Names & Logos",
  },
  {
    icon: <BrsLogo sx={{ width: '4rem', height: 'auto' }} />,
    title: "Brand Representation",
    description: "Indian representative for foreign Manufacturers",
  },
];


const ServiceBox = ({ icon, title, description }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'calc(100% - 24px)', // Adjust width for two services per line
        padding: '0.25rem',
        marginBottom: isMobile ? '0.25rem': '0',
        backgroundColor: '#ffffff',
      }}
    >
      <Box sx={{ marginRight: '10px' }}> {/* Adjust the fontSize for larger icon */}
        {icon}
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom sx={{fontSize: isMobile ? 'Auto': '1rem'}}>
          {title}
        </Typography>
        <Typography variant="body2" align="left">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};


const AboutServiceSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box 
        sx={{ 
            padding: isMobile ? '4rem 0' : '4rem 10vh',
        }}
    >
      <Grid container spacing={4}>
        {/* Left side: "How does Brand Liaison help you?" section */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: '0 20px', marginBottom: '1rem' }}>
            <Typography variant="h4" gutterBottom>
              How does Brand Liaison help you?
            </Typography>
            <Typography variant="body1" align="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed magna velit. Pellentesque felis risus, ultrices et tellus a, suscipit viverra tellus. Etiam ut urna vehicula, venenatis orci mattis, fermentum risus. Vestibulum in faucibus magna. Duis nec odio non velit dapibus consequat malesuada vel orci. Duis nisl nisi, dignissim vitae leo aliquet, tempor condimentum magna. In ligula lectus, facilisis quis faucibus id, sagittis id ante. Quisque et arcu augue.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Nulla ornare neque vel cursus imperdiet." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Phasellus quis erat et ipsum iaculis pretium." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Donec finibus diam nec pharetra tempus." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Cras vel enim vitae nulla blandit sodales." />
              </ListItem>
            </List>
            <Button variant="outlined" color="primary" size={isMobile ? 'medium' : 'large'} href="/about-us">
              Learn more about Brand Liaison
            </Button>
          </Box>
        </Grid>

        {/* Right side: Service icons */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: '0 20px' }}>
            <Typography variant="h5" gutterBottom>
              Our Services
            </Typography>
            <Grid container spacing={2} alignItems="center">
              {serviceData.map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <ServiceBox icon={service.icon} title={service.title} description={service.description} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutServiceSection;
