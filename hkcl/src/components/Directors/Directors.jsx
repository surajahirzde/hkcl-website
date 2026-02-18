import React from 'react';
import { Link } from 'react-router-dom';
import './Directors.css';

const directors = [
  {
    name: 'Sh. Dheeraj Kumar IAS',
    role: 'Chairman',
    dept: 'Additional Chief Secretary, IT Department, Haryana',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'An IAS officer of the Haryana cadre, Sh. Dheeraj Kumar provides strategic leadership and government direction to HKCL. Under his guidance, HKCL has grown from a nascent organization to a comprehensive digital empowerment platform serving lakhs of citizens.',
    linkedin: '#',
    badge: 'Chairman'
  },
  {
    name: 'Mr. Rajesh Gupta',
    role: 'Managing Director',
    dept: 'Haryana Knowledge Corporation Limited',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'With over 20 years of experience in educational technology and governance, Mr. Rajesh Gupta has been the driving force behind HKCL\'s transformative journey. He spearheaded the HS-CIT program and the Digital University initiative.',
    linkedin: '#',
    badge: 'MD'
  },
  {
    name: 'Dr. Suresh Yadav',
    role: 'Director – Academics',
    dept: 'Course & Assessment Division',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Dr. Suresh Yadav brings 15+ years of academic excellence and curriculum design expertise. He oversees all of HKCL\'s course and assessment programs, ensuring they meet both academic standards and real-world industry requirements.',
    linkedin: '#',
    badge: 'Director'
  },
  {
    name: 'Ms. Priya Sharma',
    role: 'Director – Operations',
    dept: 'Operations & Network Management',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Ms. Priya Sharma manages HKCL\'s network of 378+ affiliated institutions and ensures smooth day-to-day operations. Her expertise in process optimization has reduced operational costs by 35% while improving service delivery quality.',
    linkedin: '#',
    badge: 'Director'
  },
  {
    name: 'Mr. Amit Verma',
    role: 'Director – Technology',
    dept: 'Technology & Innovation',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Mr. Amit Verma leads HKCL\'s technology vision, overseeing the development and maintenance of 18+ digital products. A tech veteran with experience in scalable government platforms, he ensures 99.9% uptime across all HKCL systems.',
    linkedin: '#',
    badge: 'Director'
  },
  {
    name: 'CA Neha Joshi',
    role: 'Director – Finance',
    dept: 'Finance & Accounts',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'CA Neha Joshi manages HKCL\'s financial operations with transparency and accountability. A chartered accountant by profession, she has established robust financial controls that have earned HKCL consistent clean audit reports.',
    linkedin: '#',
    badge: 'Director'
  },
];

const Directors = () => {
  return (
    <div className="hkcl-dir">
      {/* Banner */}
      <div className="page-banner">
        <div className="container page-banner-content">
          <span className="section-tag">Leadership</span>
          <h1>Board of <span style={{color:'var(--primary)'}}>Directors</span></h1>
          <p>Meet the visionary leaders steering HKCL's mission to digitally empower Haryana.</p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> / <Link to="/about-us">About</Link> / <span>Directors</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="hkcl-dir__intro">
        <div className="container hkcl-dir__intro-inner">
          <div className="hkcl-dir__intro-text">
            <span className="section-tag">Our Leadership</span>
            <h2 className="section-title">Visionary <span>Leadership</span></h2>
            <p>
              HKCL's Board of Directors brings together IAS officers, technology leaders, 
              academic experts, and finance professionals — united by a common mission to 
              make Haryana a digitally empowered state.
            </p>
            <p style={{marginTop:14}}>
              Their combined expertise spans government policy, educational technology, 
              software development, institutional management, and financial governance — 
              giving HKCL a well-rounded and capable leadership structure.
            </p>
          </div>
          <div className="hkcl-dir__intro-stats">
            {[
              { val: '6+', label: 'Board Members' },
              { val: '80+', label: 'Years Combined Experience' },
              { val: '3', label: 'IAS Officers' },
              { val: '₹100Cr+', label: 'Annual Turnover Managed' },
            ].map((s, i) => (
              <div key={i} className="hkcl-dir__intro-stat">
                <strong>{s.val}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Grid */}
      <section className="hkcl-dir__grid-section">
        <div className="container">
          <div className="hkcl-dir__grid">
            {directors.map((d, i) => (
              <div key={i} className="hkcl-dir__card">
                <div className="hkcl-dir__card-top">
                  <img src={d.avatar} alt={d.name} className="hkcl-dir__card-photo" />
                  <span className="hkcl-dir__card-badge">{d.badge}</span>
                </div>
                <div className="hkcl-dir__card-body">
                  <h3 className="hkcl-dir__card-name">{d.name}</h3>
                  <span className="hkcl-dir__card-role">{d.role}</span>
                  <span className="hkcl-dir__card-dept">{d.dept}</span>
                  <p className="hkcl-dir__card-bio">{d.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directors;
