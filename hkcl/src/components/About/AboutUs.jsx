import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="hkcl-about">
      {/* Banner */}
      <div className="page-banner">
        <div className="container page-banner-content">
          <span className="section-tag">Our Story</span>
          <h1>About <span style={{color:'var(--primary)'}}>HKCL</span></h1>
          <p>Creating a Knowledge Lit World — one student, one institution at a time.</p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link> / <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="hkcl-about__mission">
        <div className="container hkcl-about__mission-inner">
          <div className="hkcl-about__mission-text">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">Haryana Knowledge <span>Corporation Limited</span></h2>
            <p>
              Haryana Knowledge Corporation Limited (HKCL) is a Government of Haryana initiative, 
              established with the singular mission of digitally empowering the state's students, 
              institutions, and government bodies. As an ISO 9001:2015 Certified Organization, 
              we uphold the highest standards of quality in every solution we deliver.
            </p>
            <p style={{marginTop:16}}>
              Since our inception, we have partnered with 378+ affiliated colleges and institutions, 
              reaching over 5.6 lakh students across Haryana's 22 districts. Our work spans digital 
              literacy, higher education transformation, e-governance, and human resource development — 
              making us a truly comprehensive partner for Haryana's digital future.
            </p>
            <div className="hkcl-about__badges">
              <div className="hkcl-about__badge">
                <span>🏛️</span>
                <strong>Govt. of Haryana</strong>
                <small>Promoted Initiative</small>
              </div>
              <div className="hkcl-about__badge">
                <span>✅</span>
                <strong>ISO 9001:2015</strong>
                <small>Certified Org</small>
              </div>
              <div className="hkcl-about__badge">
                <span>🎯</span>
                <strong>6+ Years</strong>
                <small>Of Excellence</small>
              </div>
            </div>
          </div>
          <div className="hkcl-about__mission-img">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80"
              alt="HKCL Campus"
            />
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="hkcl-about__vmv">
        <div className="container">
          <div className="hkcl-about__vmv-grid">
            {[
              {
                icon: '🔭',
                title: 'Our Vision',
                color: '#E8610A',
                text: 'To be the most trusted digital empowerment platform in India, creating a knowledge-lit world where every citizen can access quality education and digital services.',
              },
              {
                icon: '🎯',
                title: 'Our Mission',
                color: '#1565C0',
                text: 'To democratize digital education in Haryana by building world-class learning platforms, transforming government processes, and connecting institutions with modern technology.',
              },
              {
                icon: '💎',
                title: 'Our Values',
                color: '#2E7D32',
                text: 'Integrity, Quality, Innovation, and Service. We believe that serving the people is service to the nation. Every decision we make is guided by our commitment to making Haryana digitally empowered.',
              },
            ].map((item, i) => (
              <div key={i} className="hkcl-about__vmv-card" style={{ '--vmv-color': item.color }}>
                <div className="hkcl-about__vmv-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="hkcl-about__timeline">
        <div className="container">
          <div className="hkcl-about__timeline-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">HKCL <span>Milestones</span></h2>
          </div>
          <div className="hkcl-about__tl-items">
            {[
              { year: '2013', title: 'HKCL Founded', desc: 'Established as a Government of Haryana initiative to digitally empower the state.' },
              { year: '2015', title: 'HS-CIT Launched', desc: 'Launched the flagship Haryana State Certificate in IT, reaching students across all districts.' },
              { year: '2017', title: 'Digital University Program', desc: 'Partnered with Haryana\'s top universities to begin digital transformation of higher education.' },
              { year: '2019', title: 'ISO 9001:2015 Certified', desc: 'Received ISO certification, affirming our commitment to quality standards.' },
              { year: '2021', title: '3 Lakh Students Milestone', desc: 'Crossed 3 lakh certified students, growing network to 300+ institutions.' },
              { year: '2024', title: '5.6 Lakh Students & 18+ Products', desc: 'Expanded to 18+ digital products, 378 institutions, and 5.6 lakh empowered students.' },
            ].map((item, i) => (
              <div key={i} className={`hkcl-about__tl-item${i % 2 === 0 ? ' left' : ' right'}`}>
                <div className="hkcl-about__tl-dot" />
                <div className="hkcl-about__tl-card">
                  <span className="hkcl-about__tl-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hkcl-about__cta">
        <div className="container hkcl-about__cta-inner">
          <h2>Want to Partner with HKCL?</h2>
          <p>Join our growing network of institutions, vendors, and government partners.</p>
          <div style={{ display:'flex', gap: 14, flexWrap:'wrap', justifyContent:'center', marginTop:28 }}>
            <a href="mailto:webenquiry@hkcl.in" className="btn-primary">Get In Touch →</a>
            <Link to="/products" className="btn-outline" style={{color:'white',borderColor:'rgba(255,255,255,0.4)'}}>View Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
