import React from 'react';
import WebsiteLayout from '../../layouts/frontend/WebsiteLayout';
import HeroSection from '../../components/frontend/HeroSection';
import AboutServiceSection from '../../components/frontend/AboutServiceSection';
import DownloadBrochureForm from '../../components/frontend/DownloadBrochureSection';
import WorkProcessSection from '../../components/frontend/WorkProcessSection';
import BlogSection from '../../components/frontend/BlogSection';
import TestimonialSection from '../../components/frontend/TestimonialSection';

const HomePage = () => {
  return (
    <WebsiteLayout>
      <HeroSection />
      <AboutServiceSection />
      <DownloadBrochureForm />
      <WorkProcessSection />
      <BlogSection />
      <TestimonialSection />
    </WebsiteLayout>
  );
};

export default HomePage;