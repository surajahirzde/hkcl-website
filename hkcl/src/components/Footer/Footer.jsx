import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="hkcl-footer" id="contact">
  

      {/* Main footer */}
      <div className="hkcl-footer__main">
        <div className="container hkcl-footer__main-inner">
          {/* Brand */}
          <div className="hkcl-footer__brand">
            <img
              src="https://chagans.com/assets/logo-C0KdOek8.jpg"
              alt="HKCL"
              className="hkcl-footer__logo"
            />
            <p className="hkcl-footer__brand-desc">
              Creating a Knowledge Lit World. Promoted by Government of Haryana.
              ISO 9001:2015 Certified Organization.
            </p>
            <div className="hkcl-footer__contact-info">
              <p>📍 SC0-4 , Dayal Bagh Market,Sector-39 , Faridabad-121009,Haryana</p>
              <p>📞 01294020010</p>
              <p>✉️ info@chagans.com</p>
            </div>
            <div className="hkcl-footer__legal">
              <span>CIN: U74999HR2022PTC100527</span>
              <span>PAN: AADCH2997K</span>
              <span>GSTIN:  06AAGCC6826R2Z0</span>
            </div>
          </div>

          {/* Useful Links */}
          <div className="hkcl-footer__col">
            <h4>Useful Links</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/directors">Directors</Link></li>
              <li><Link to="/products">Products</Link></li>
             
          
       
              <li><a href="#">Chagan's Program Summary</a></li>
             
            </ul>
          </div>

          {/* Services */}
          <div className="hkcl-footer__col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services/course-assessment">Courses & Assessment</Link></li>
              <li><Link to="/services/e-governance">e-Governance</Link></li>
              <li><Link to="/services/higher-education">Higher Education</Link></li>
              <li><Link to="/services/hr-outsourcing">HR Outsourcing</Link></li>
            </ul>
            <h4 style={{marginTop:24}}>Quick Access</h4>
            <ul>
              
             
              <li><a href="#">Tenders</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="hkcl-footer__col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products/hs-cit">HS-CIT</Link></li>
              <li><Link to="/products/hs-cit-a">HS-CIT(A)</Link></li>
              <li><Link to="/products/hs-cit-aplus">HS-CIT(A+)</Link></li>
              <li><Link to="/products/har-pariksha">HarPariksha</Link></li>
              <li><Link to="/products/digital-university">Digital University</Link></li>
              <li><Link to="/products/online-admission">Online Admission</Link></li>
              <li><Link to="/products/online-recruitment">Online Recruitment</Link></li>
              <li><Link to="/products/mentza">Mentza App</Link></li>
              <li><Link to="/products/abhyasika">Abhyasika</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hkcl-footer__bottom">
        <div className="container hkcl-footer__bottom-inner">
          <p>© Copyright 2024 <strong>HKCL</strong>. All Rights Reserved</p>
          <div className="hkcl-footer__socials">
            <a href="https://twitter.com/hkcl_in" target="_blank" rel="noreferrer" className="hkcl-footer__social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com/hkclin" target="_blank" rel="noreferrer" className="hkcl-footer__social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com/hkcl.in" target="_blank" rel="noreferrer" className="hkcl-footer__social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
