import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const programs = [
  { name: 'Auction Management System', desc: 'Transparent online government asset auctions', link: '/products/auction-management', color: '#37474F' },
  { name: 'Online Transfer System', desc: 'Transparent employee transfer management', link: '/products/online-transfer', color: '#00695C' },
  { name: 'Web & Software Development', desc: 'Custom government-grade digital solutions', link: '/products/web-software-dev', color: '#1A237E' },
];

const EGovernance = () => (
  <div className="hkcl-svc">
    <div className="page-banner">
      <div className="container page-banner-content">
        <span className="section-tag">Our Services</span>
        <h1>e-Governance <span style={{color:'var(--primary)'}}>Services</span></h1>
        <p>Transforming how the Government of Haryana serves its citizens through technology, transparency, and digital innovation.</p>
        <div className="page-banner-breadcrumb">
          <Link to="/">Home</Link> / Services / <span>e-Governance</span>
        </div>
      </div>
    </div>

    <section className="hkcl-svc__overview">
      <div className="container hkcl-svc__overview-inner">
        <div>
          <span className="section-tag">Our Approach</span>
          <h2 className="section-title">Serving People <span>Digitally</span></h2>
          <p className="hkcl-svc__overview-text">
            We believe that serving the people is the service to the nation. As a high-tech initiative 
            of the Government of Haryana, HKCL works tirelessly on serving citizens, government departments, 
            and public institutions with modern, efficient, and transparent digital systems.
          </p>
          <p className="hkcl-svc__overview-text" style={{marginTop:14}}>
            Our e-governance solutions eliminate corruption, reduce processing times, and make government 
            services accessible to every citizen of Haryana — regardless of location or digital literacy.
          </p>
          <div className="hkcl-svc__highlights">
            {['Anti-Corruption Systems', '100% Transparency', 'Real-time Monitoring', '40+ Departments'].map((h, i) => (
              <span key={i} className="hkcl-svc__highlight-chip">✅ {h}</span>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80"
            alt="e-Governance"
            className="hkcl-svc__overview-img"
          />
        </div>
      </div>
    </section>

    <section className="hkcl-svc__programs">
      <div className="container">
        <div className="hkcl-svc__programs-header">
          <span className="section-tag">Solutions</span>
          <h2 className="section-title">e-Governance <span>Products</span></h2>
        </div>
        <div className="hkcl-svc__programs-grid">
          {programs.map((p, i) => (
            <Link to={p.link} key={i} className="hkcl-svc__prog-card" style={{'--svc-color': p.color}}>
              <div className="hkcl-svc__prog-icon" style={{background: `${p.color}15`}}>
                <span>🏛️</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="hkcl-svc__prog-link">View Solution →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="hkcl-svc__why">
      <div className="container">
        <div className="hkcl-svc__why-header">
          <span className="section-tag">Impact</span>
          <h2 className="section-title">Measurable <span>Impact</span></h2>
        </div>
        <div className="hkcl-svc__why-grid">
          {[
            { icon: '🔍', title: '100% Transparency', desc: 'Every process is auditable, traceable, and publicly accountable — eliminating corruption.' },
            { icon: '⚡', title: '80% Faster', desc: 'Government processes that took months now complete in days or weeks with our automation.' },
            { icon: '💰', title: 'Cost Reduction', desc: 'Digitization has reduced administrative costs by up to 40% across client departments.' },
            { icon: '🌐', title: 'Pan-Haryana Reach', desc: 'Our systems operate across all 22 districts, serving urban and rural citizens equally.' },
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
        <h2>Transform Your Department with Digital Solutions</h2>
        <p>Connect with HKCL to explore tailored e-governance solutions for your department.</p>
        <a href="mailto:webenquiry@hkcl.in" className="btn-primary" style={{marginTop:24,display:'inline-block'}}>Get in Touch →</a>
      </div>
    </section>
  </div>
);

export default EGovernance;
