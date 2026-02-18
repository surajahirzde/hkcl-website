import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const programs = [
  { name: 'Digital University Program', desc: 'Complete digital transformation for universities', link: '/products/digital-university', color: '#0277BD' },
  { name: 'Online Admission Portal', desc: 'Seamless admissions management for institutions', link: '/products/online-admission', color: '#1565C0' },
  { name: 'BBA@Workplace', desc: 'Work-based BBA degree by IGNOU & HKCL', link: '/products/bba-workplace', color: '#4527A0' },
];

const HigherEducation = () => (
  <div className="hkcl-svc">
    <div className="page-banner">
      <div className="container page-banner-content">
        <span className="section-tag">Our Services</span>
        <h1>Higher Education <span style={{color:'var(--primary)'}}>Transformation</span></h1>
        <p>Enabling Haryana's universities and colleges to operate fully in the digital age — from admissions to exams.</p>
        <div className="page-banner-breadcrumb">
          <Link to="/">Home</Link> / Services / <span>Higher Education</span>
        </div>
      </div>
    </div>

    <section className="hkcl-svc__overview">
      <div className="container hkcl-svc__overview-inner">
        <div>
          <span className="section-tag">The Challenge</span>
          <h2 className="section-title">Going <span>Digital Together</span></h2>
          <p className="hkcl-svc__overview-text">
            Universities in Haryana are going digital with HKCL's Digital University Program. 
            Our partner universities are fully enabled in operating digitally — handling everything 
            from student enrollment to examination management without a single paper form.
          </p>
          <p className="hkcl-svc__overview-text" style={{marginTop:14}}>
            We partner with universities to understand their unique needs and build customized 
            digital ecosystems. Our solutions are scalable, secure, and designed for the diverse 
            needs of Haryana's educational institutions.
          </p>
          <div className="hkcl-svc__highlights">
            {['28+ Universities', 'End-to-End Digital', '8L+ Students Managed', 'NAAC Compliant'].map((h, i) => (
              <span key={i} className="hkcl-svc__highlight-chip">✅ {h}</span>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=700&q=80"
            alt="Higher Education"
            className="hkcl-svc__overview-img"
          />
        </div>
      </div>
    </section>

    <section className="hkcl-svc__programs">
      <div className="container">
        <div className="hkcl-svc__programs-header">
          <span className="section-tag">Solutions</span>
          <h2 className="section-title">Higher Education <span>Programs</span></h2>
        </div>
        <div className="hkcl-svc__programs-grid">
          {programs.map((p, i) => (
            <Link to={p.link} key={i} className="hkcl-svc__prog-card" style={{'--svc-color': p.color}}>
              <div className="hkcl-svc__prog-icon" style={{background: `${p.color}15`}}>
                <span>🎓</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="hkcl-svc__prog-link">Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="hkcl-svc__why">
      <div className="container">
        <div className="hkcl-svc__why-header">
          <span className="section-tag">Why HKCL</span>
          <h2 className="section-title">Transform Your <span>University</span></h2>
        </div>
        <div className="hkcl-svc__why-grid">
          {[
            { icon: '🏗️', title: 'End-to-End Solution', desc: 'From admission portals to result management — a single integrated platform for your entire institution.' },
            { icon: '🔒', title: 'Secure & Compliant', desc: 'NAAC, UGC, and government compliance built-in. Data security and privacy are our top priorities.' },
            { icon: '📈', title: 'Scalable Infrastructure', desc: 'Handles peak admission loads of 50,000+ concurrent users with 99.9% uptime guarantee.' },
            { icon: '🤝', title: 'Dedicated Support', desc: 'A dedicated support team for every partner institution, ensuring smooth operations 24/7.' },
          ].map((w, i) => (
            <div key={i} className="hkcl-svc__why-card">
              <span className="hkcl-svc__why-icon">{w.icon}</span>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="hkcl-svc__cta">
      <div className="container hkcl-svc__cta-inner">
        <h2>Ready to Transform Your Institution?</h2>
        <p>Join 28+ universities who have already made the digital leap with HKCL.</p>
        <a href="mailto:webenquiry@hkcl.in" className="btn-primary" style={{marginTop:24,display:'inline-block'}}>Book a Demo →</a>
      </div>
    </section>
  </div>
);

export default HigherEducation;
