import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const programs = [
  { name: 'Online Recruitment', desc: 'End-to-end hiring platform for govt & private orgs', link: '/products/online-recruitment', color: '#BF360C' },
  { name: 'Campus Recruitment Training', desc: 'Bridging campus to corporate for fresh graduates', link: '/products/campus-recruitment', color: '#6A1B9A' },
  { name: 'HR Outsourcing Program', desc: 'Complete HR management solutions for organizations', link: '/products/hr-outsourcing-prog', color: '#BF360C' },
  { name: 'Haryana Talent Search', desc: 'Identifying and rewarding Haryana\'s brightest minds', link: '/products/haryana-talent-search', color: '#1B5E20' },
];

const HROutsourcing = () => (
  <div className="hkcl-svc">
    <div className="page-banner">
      <div className="container page-banner-content">
        <span className="section-tag">Our Services</span>
        <h1>HR Outsourcing <span style={{color:'var(--primary)'}}>Programme</span></h1>
        <p>Comprehensive human resource solutions — from talent discovery to workforce management.</p>
        <div className="page-banner-breadcrumb">
          <Link to="/">Home</Link> / Services / <span>HR Outsourcing</span>
        </div>
      </div>
    </div>

    <section className="hkcl-svc__overview">
      <div className="container hkcl-svc__overview-inner">
        <div>
          <span className="section-tag">Our Expertise</span>
          <h2 className="section-title">Your Complete <span>HR Partner</span></h2>
          <p className="hkcl-svc__overview-text">
            HKCL's Human Resource Outsourcing Programme provides organizations with end-to-end 
            HR solutions that reduce costs, improve efficiency, and ensure compliance. From campus 
            placements to executive recruitment, payroll processing to performance management — we handle it all.
          </p>
          <p className="hkcl-svc__overview-text" style={{marginTop:14}}>
            Our talent pipeline connects Haryana's best students with top employers, while our 
            recruitment platform enables government bodies and corporations to hire efficiently, 
            transparently, and at scale.
          </p>
          <div className="hkcl-svc__highlights">
            {['50K+ Placements', '200+ Client Orgs', '1L+ Managed Employees', 'Anti-bias Hiring'].map((h, i) => (
              <span key={i} className="hkcl-svc__highlight-chip">✅ {h}</span>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80"
            alt="HR Outsourcing"
            className="hkcl-svc__overview-img"
          />
        </div>
      </div>
    </section>

    <section className="hkcl-svc__programs">
      <div className="container">
        <div className="hkcl-svc__programs-header">
          <span className="section-tag">Programs</span>
          <h2 className="section-title">HR <span>Solutions</span></h2>
        </div>
        <div className="hkcl-svc__programs-grid">
          {programs.map((p, i) => (
            <Link to={p.link} key={i} className="hkcl-svc__prog-card" style={{'--svc-color': p.color}}>
              <div className="hkcl-svc__prog-icon" style={{background: `${p.color}15`}}>
                <span>👔</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="hkcl-svc__prog-link">Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="hkcl-svc__why">
      <div className="container">
        <div className="hkcl-svc__why-header">
          <span className="section-tag">Benefits</span>
          <h2 className="section-title">Why HR Outsourcing <span>with HKCL?</span></h2>
        </div>
        <div className="hkcl-svc__why-grid">
          {[
            { icon: '💰', title: '40% Cost Reduction', desc: 'Significantly lower HR operational costs through our proven outsourcing models and technology.' },
            { icon: '🎯', title: 'Quality Talent', desc: 'Access to a curated talent pool across all skill levels, from entry-level to senior executives.' },
            { icon: '⚖️', title: 'Full Compliance', desc: 'Stay compliant with all labour laws, statutory requirements, and government HR regulations.' },
            { icon: '📱', title: 'Digital-First Process', desc: 'Fully digital HR processes — from job applications to salary disbursement on mobile.' },
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
        <h2>Streamline Your HR Operations with HKCL</h2>
        <p>Let us handle your HR while you focus on what matters most — your business.</p>
        <a href="mailto:webenquiry@hkcl.in" className="btn-primary" style={{marginTop:24,display:'inline-block'}}>Partner With Us →</a>
      </div>
    </section>
  </div>
);

export default HROutsourcing;
