import React from 'react';
import Title from "../../components/ui/Title/Title";
import WelcomeSection from './components/WelcomeSection';
import CollegeHistorySection from './components/CollegeHistorySection';
import CollegeDocuments from './components/CollegeDocuments';
import CollegeReviews from './components/CollegeReviews';
import CollegeInfoSection from './components/CollegeInfoSection';
import CallToAction from './components/CallToAction';
import './About.scss';

const About = () => {
  return (
    <div className="about-page">
      <Title title="О колледже" />
      <WelcomeSection />
      <CollegeHistorySection />
      <CollegeInfoSection />
      <CollegeDocuments />
      <CollegeReviews />
      <CallToAction />
    </div>
  )
}

export default About;