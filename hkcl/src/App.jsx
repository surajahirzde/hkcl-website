import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from "./ScrollToTop";
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Home = lazy(() => import('./components/Home/Home'));
const AboutUs = lazy(() => import('./components/About/AboutUs'));
const Directors = lazy(() => import('./components/Directors/Directors'));
const CourseAssessment = lazy(() => import('./components/Services/CourseAssessment'));
const EGovernance = lazy(() => import('./components/Services/EGovernance'));
const HigherEducation = lazy(() => import('./components/Services/HigherEducation'));
const HROutsourcing = lazy(() => import('./components/Services/HROutsourcing'));
const Products = lazy(() => import('./components/Products/Products'));
const ProductDetail = lazy(() => import('./components/ProductDetail/ProductDetail'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const PageLoader = () => (
  <div className="app-page-loader">
    <div className="app-spinner"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Navbar /> 
        a<ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/services/course-assessment" element={<CourseAssessment />} />
          <Route path="/services/e-governance" element={<EGovernance />} />
          <Route path="/services/higher-education" element={<HigherEducation />} />
          <Route path="/services/hr-outsourcing" element={<HROutsourcing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
