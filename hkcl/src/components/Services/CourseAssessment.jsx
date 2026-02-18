import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const programs = [
  { name: 'HS-CIT', desc: 'Foundation certificate in IT for all Haryana students', link: '/products/hs-cit', color: '#E8610A' },
  { name: 'HS-CIT(A)', desc: 'Advanced application skills for working professionals', link: '/products/hs-cit-a', color: '#1565C0' },
  { name: 'HS-CIT(A+)', desc: 'Elite IT skills — programming, web dev & cloud', link: '/products/hs-cit-aplus', color: '#2E7D32' },
  { name: 'HarPariksha', desc: 'AI-powered online examination platform', link: '/products/har-pariksha', color: '#E8610A' },
  { name: 'Smart Teacher', desc: 'Digital upskilling for educators', link: '/products/smart-teacher', color: '#E65100' },
  { name: 'Career Oriented Courses', desc: 'Job-ready skills for the new economy', link: '/products/career-oriented-courses', color: '#6A1B9A' },
];

const CourseAssessment = () => (
  <div className="hkcl-svc">
    <div className="page-banner">
      <div className="container page-banner-content">
        <span className="section-tag">Our Services</span>
        <h1>Course & <span style={{color:'var(--primary)'}}>Assessment</span></h1>
        <p>Empowering learners with government-recognized certifications and world-class digital literacy programs.</p>
        <div className="page-banner-breadcrumb">
          <Link to="/">Home</Link> / Services / <span>Course & Assessment</span>
        </div>
      </div>
    </div>

    <section className="hkcl-svc__overview">
      <div className="container hkcl-svc__overview-inner">
        <div>
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Digital Literacy <span>for Every Haryanvi</span></h2>
          <p className="hkcl-svc__overview-text">
            HKCL's Course and Assessment division is the backbone of digital literacy in Haryana. 
            Developed by academicians and educationists with over 8 years of domain experience, 
            our programs have absolutely no match when it comes to automating and transforming academic delivery.
          </p>
          <p className="hkcl-svc__overview-text" style={{marginTop:14}}>
            From school students taking their first steps in computing to professionals seeking 
            advanced certifications — our portfolio covers the entire learning journey with government-recognized, 
            industry-aligned programs.
          </p>
          <div className="hkcl-svc__highlights">
            {['Government Recognized', 'Industry Aligned', '5.6L+ Students', 'ISO Certified Content'].map((h, i) => (
              <span key={i} className="hkcl-svc__highlight-chip">✅ {h}</span>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80"
            alt="Course Assessment"
            className="hkcl-svc__overview-img"
          />
        </div>
      </div>
    </section>

    <section className="hkcl-svc__programs">
      <div className="container">
        <div className="hkcl-svc__programs-header">
          <span className="section-tag">Programs</span>
          <h2 className="section-title">Our Course <span>Portfolio</span></h2>
        </div>
        <div className="hkcl-svc__programs-grid">
          {programs.map((p, i) => (
            <Link to={p.link} key={i} className="hkcl-svc__prog-card" style={{'--svc-color': p.color}}>
              <div className="hkcl-svc__prog-icon" style={{background: `${p.color}15`}}>
                <span>📚</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <span className="hkcl-svc__prog-link">View Program →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="hkcl-svc__why">
      <div className="container">
        <div className="hkcl-svc__why-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">The HKCL <span>Advantage</span></h2>
        </div>
        <div className="hkcl-svc__why-grid">
          {[
            { icon: '🏛️', title: 'Govt. Recognized', desc: 'All certificates are recognized by the Government of Haryana and accepted across departments and institutions.' },
            { icon: '👩‍🏫', title: 'Expert Faculty', desc: 'Courses designed and reviewed by experienced academicians and industry professionals with 8+ years expertise.' },
            { icon: '📱', title: 'Digital Delivery', desc: 'Learn online, offline, or hybrid — our platform adapts to your learning style and environment.' },
            { icon: '📊', title: 'Data-Driven Learning', desc: 'AI-powered assessments provide personalized feedback and track progress for optimal learning outcomes.' },
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
        <h2>Start Your Digital Learning Journey</h2>
        <p>Join 5.6 lakh students who have transformed their futures with HKCL certifications.</p>
        <a href="https://hkcl.in" className="btn-primary" style={{marginTop:24,display:'inline-block'}}>Enroll Now →</a>
      </div>
    </section>
  </div>
);

export default CourseAssessment;
