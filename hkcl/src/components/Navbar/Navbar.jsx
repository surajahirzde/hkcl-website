import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className={`hkcl-nav${scrolled ? ' hkcl-nav--scrolled' : ''}`}>
      <div className="hkcl-nav__inner container">
        {/* Logo */}
        <Link to="/" className="hkcl-nav__logo">
          <img
            src="https://chagans.com/assets/logo-C0KdOek8.jpg"
            alt="Chagans Logo"
            className="hkcl-nav__logo-img"
          />
                 <img
            src="https://hkcl.in/assets/img/logo/HKCL_logo.jpg"
            alt="Hkcl Logo"
            className="hkcl-nav__logo-img"
          />
          <div className="hkcl-nav__logo-text">
            <span className="hkcl-nav__logo-title">Haryana Knowledge</span>
            <span className="hkcl-nav__logo-sub">Corporation Limited</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hkcl-nav__links">
          <li><Link to="/" onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } className={`hkcl-nav__link${location.pathname === '/' ? ' active' : ''}`}>Home</Link></li>

          {/* About Dropdown */}
          <li className="hkcl-nav__dropdown" ref={aboutRef}>
            <button
              className={`hkcl-nav__link hkcl-nav__drop-btn${location.pathname.includes('about') || location.pathname.includes('director') ? ' active' : ''}`}
              onClick={() => { setAboutOpen(!aboutOpen); setServicesOpen(false); }}
            >
              About
              <svg className={`hkcl-nav__chevron${aboutOpen ? ' open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div className={`hkcl-nav__menu${aboutOpen ? ' open' : ''}`}>
              <Link to="/about-us" className="hkcl-nav__menu-item">
                <span className="hkcl-nav__menu-icon">🏛️</span>
                <div>
                  <strong>About Us</strong>
                  <small>Our story & mission</small>
                </div>
              </Link>
              <Link to="/directors" className="hkcl-nav__menu-item">
                <span className="hkcl-nav__menu-icon">👥</span>
                <div>
                  <strong>Directors</strong>
                  <small>Meet our leadership</small>
                </div>
              </Link>
            </div>
          </li>

          {/* Services Dropdown */}
          <li className="hkcl-nav__dropdown" ref={servicesRef}>
            <button
              className={`hkcl-nav__link hkcl-nav__drop-btn${location.pathname.includes('service') ? ' active' : ''}`}
              onClick={() => { setServicesOpen(!servicesOpen); setAboutOpen(false); }}
            >
              Services
              <svg className={`hkcl-nav__chevron${servicesOpen ? ' open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div className={`hkcl-nav__menu hkcl-nav__menu--wide${servicesOpen ? ' open' : ''}`}>
              <Link to="/services/course-assessment" className="hkcl-nav__menu-item">
                <span className="hkcl-nav__menu-icon">📚</span>
                <div>
                  <strong>Course & Assessment</strong>
                  <small>HS-CIT, digital literacy programs</small>
                </div>
              </Link>
              <Link to="/services/e-governance" className="hkcl-nav__menu-item">
                <span className="hkcl-nav__menu-icon">🏛️</span>
                <div>
                  <strong>e-Governance</strong>
                  <small>Digital government services</small>
                </div>
              </Link>
              <Link to="/services/higher-education" className="hkcl-nav__menu-item">
                <span className="hkcl-nav__menu-icon">🎓</span>
                <div>
                  <strong>Higher Education</strong>
                  <small>University transformation</small>
                </div>
              </Link>
              <Link to="/services/hr-outsourcing" className="hkcl-nav__menu-item">
                <span className="hkcl-nav__menu-icon">👔</span>
                <div>
                  <strong>HR Outsourcing Programme</strong>
                  <small>Talent & recruitment services</small>
                </div>
              </Link>
            </div>
          </li>

          <li><Link to="/products" className={`hkcl-nav__link${location.pathname.includes('product') ? ' active' : ''}`}>Products</Link></li>
         
      
          <li><a href="#contact" className="hkcl-nav__link">Contact</a></li>
        </ul>

     

        {/* Mobile Toggle */}
        <button className="hkcl-nav__hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={mobileOpen ? 'open' : ''}></span>
          <span className={mobileOpen ? 'open' : ''}></span>
          <span className={mobileOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`hkcl-nav__mobile${mobileOpen ? ' open' : ''}`}>
        <Link to="/"  onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } className="hkcl-nav__mob-link">Home</Link>
                
        <div className="hkcl-nav__mob-group">
          <button className="hkcl-nav__mob-group-btn" onClick={() => setAboutOpen(!aboutOpen)}>
            About <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {aboutOpen && (
            <div className="hkcl-nav__mob-sub">
              <Link to="/about-us">About Us</Link>
              <Link to="/directors">Directors</Link>
            </div>
          )}
        </div>
        <div className="hkcl-nav__mob-group">
          <button className="hkcl-nav__mob-group-btn" onClick={() => setServicesOpen(!servicesOpen)}>
            Services <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {servicesOpen && (
            <div className="hkcl-nav__mob-sub">
              <Link to="/services/course-assessment">Course & Assessment</Link>
              <Link to="/services/e-governance">e-Governance</Link>
              <Link to="/services/higher-education">Higher Education</Link>
              <Link to="/services/hr-outsourcing">HR Outsourcing</Link>
            </div>
          )}
        </div>
        <Link to="/products" className="hkcl-nav__mob-link">Products</Link>
        <a href="#contact" className="hkcl-nav__mob-link">Contact</a>
        <div className="hkcl-nav__mob-cta">
          <a href="https://hkcl.in/itsakshamyuva" className="hkcl-nav__btn hkcl-nav__btn--outline">IT Saksham</a>
          <a href="https://hkcl.in/verifyresult" className="hkcl-nav__btn hkcl-nav__btn--solid">Verify Result</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
