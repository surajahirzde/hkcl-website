import React, { Suspense, lazy } from 'react';
import './Home.css';

const Slider = lazy(() => import('../Slider/Slider'));
const ServiceCards = lazy(() => import('../ServiceCards/ServiceCards'));
const Testimonials = lazy(() => import('../Testimonials/Testimonials'));
const HomeProducts = lazy(() => import('./HomeProducts'));
const HomeStats = lazy(() => import('./HomeStats'));
const HomeCTA = lazy(() => import('./HomeCTA'));

const Home = () => {
  return (
    <div className="hkcl-home">
      <Suspense fallback={<div style={{height:'100vh',background:'#0f2430'}}/>}>
        <Slider />
      </Suspense>
      <Suspense fallback={<div style={{height:'300px'}}/>}>
        <ServiceCards />
      </Suspense>
      <Suspense fallback={<div style={{height:'200px'}}/>}>
        <HomeStats />
      </Suspense>
      <Suspense fallback={<div style={{height:'400px'}}/>}>
        <HomeProducts />
      </Suspense>
      <Suspense fallback={<div style={{height:'300px'}}/>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div style={{height:'200px'}}/>}>
        <HomeCTA />
      </Suspense>
    </div>
  );
};

export default Home;
