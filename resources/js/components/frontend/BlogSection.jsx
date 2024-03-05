import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, Avatar, useMediaQuery, Badge } from '@mui/material';

import { createTheme } from '@mui/material/styles';

const dummyBlogs = [
  {
    id: 1,
    title: 'How to get a BIS Registration Certificate for Imports in India?',
    category: 'BIS / CRS Registration',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna vehicula, venenatis orci mattis, fermentum risus.',
    author: {
      name: 'BL-India',
      avatar: 'https://via.placeholder.com/50', // Add URL for author avatar image
    },
    date: 'September 20, 2023',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'WPC License for Import in India',
    category: 'WPC / ETA Approval',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna vehicula, venenatis orci mattis, fermentum risus.',
    author: {
      name: 'BL-India',
      avatar: 'https://via.placeholder.com/50', // Add URL for author avatar image
    },
    date: 'October 5, 2023',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'How to Renew EPR Certificate for Battery Waste?',
    category: 'EPR Authorization',
    preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut urna vehicula, venenatis orci mattis, fermentum risus.',
    author: {
      name: 'BL-India',
      avatar: 'https://via.placeholder.com/50', // Add URL for author avatar image
    },
    date: 'November 12, 2023',
    image: 'https://via.placeholder.com/300',
  },
];

const BlogSection = () => {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{py: 4, px: 4, alignItems: 'center', margin: isMobile ? '': '2rem 15vh'}}>
      <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
      News & Blogs
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center'}}>
        Read Our Latest Updates
      </Typography>
      <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', pb: 4}}>
      Our blogs cover everything you need to know about product certification, required documents, and compliance validity. Stay updated with industry trends!
      </Typography>
      <Grid container spacing={4}>
        {dummyBlogs.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  background: 'rgba(67, 180, 228, 0.6)',
                  color: '#fff',
                  padding: '4px 8px',
                  zIndex: 1,
                }}
              >
                <Typography variant="body2">{blog.category}</Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ height: 72, overflow: 'hidden' }}>{blog.title}</Typography>
                <Typography variant="body2" sx={{ my: 1, overflow: 'hidden' }}>{blog.preview}</Typography>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={blog.author.avatar} alt={blog.author.name} sx={{ mr: 1 }} />
                      <Typography variant="body2">{blog.author.name}</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">{blog.date}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center'}}>
        <Button variant="outlined" size='large' color="primary">
          View All Blogs
        </Button>
      </Box>
    </Box>
  );
};

export default BlogSection;
