import React, { lazy, Suspense } from 'react'
import "./Home.scss"
import HeroSection from './Components/HeroSection/HeroSection'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const StatsSection = lazy(() => import('./Components/StatsSection/StatsSection'));
const NewsSection = lazy(() => import('./Components/NewsSection/NewsSection'));
const AdvantagesSection = lazy(() => import('./Components/AdvantagesSection/AdvantagesSection'));
const SpecialtiesSection = lazy(() => import('./Components/SpecialtiesSection/SpecialtiesSection'));
const GallerySection = lazy(() => import('./Components/GallerySection/GallerySection'));
const HeroBackgroundSection = lazy(() => import('./Components/HeroBackgroundSection/HeroBackgroundSection'));
const ContactForm = lazy(() => import('./Components/ContactForm/ContactForm'));

gsap.registerPlugin(ScrollTrigger);


const LoadingFallback = () => <div className="section-loader"></div>;

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Suspense fallback={<LoadingFallback />}>
        <StatsSection />
        <ContactForm />
        <NewsSection />
        <AdvantagesSection />
        <SpecialtiesSection />
        <GallerySection />
        <div className="home-page__overlap-container">
          <HeroBackgroundSection />
          <div className="home-page__contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default Home