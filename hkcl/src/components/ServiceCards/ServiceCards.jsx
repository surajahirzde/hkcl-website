import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCards.css';

const services = [
  {
    icon: '📚',
    title: 'Course & Assessment Services',
    desc: 'Developed by academicians and educationists with 8+ years domain experience. Knowledge Lit Development Program has absolutely no match when it comes to automating Academics.',
    link: '/services/course-assessment',
    color: '#E8610A',
    bg: 'rgba(232,97,10,0.07)',
  },
  {
    icon: '🎓',
    title: 'Higher Education Transformation',
    desc: 'Universities in the state are going digital with HKCL\'s Digital University Program. Our universities are enabled in operating digitally to serve students better.',
    link: '/services/higher-education',
    color: '#1565C0',
    bg: 'rgba(21,101,192,0.07)',
  },
  {
    icon: '🏛️',
    title: 'e-Governance Services',
    desc: 'We believe that serving the people is the service to the nation. We are a high-tech initiative of the Government of Haryana and work on serving them digitally.',
    link: '/services/e-governance',
    color: '#2E7D32',
    bg: 'rgba(46,125,50,0.07)',
  },
  {
    icon: '👔',
    title: 'HR Outsourcing Programme',
    desc: 'Comprehensive human resource outsourcing and talent management solutions. From campus recruitment to skill development — we handle your HR needs end to end.',
    link: '/services/hr-outsourcing',
    color: '#6A1B9A',
    bg: 'rgba(106,27,154,0.07)',
  },
];

const ServiceCards = () => {
  return (
    <section className="hkcl-sc">
      <div className="container">
        <div className="hkcl-sc__header">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Our Core <span>Services</span></h2>
          <p className="section-subtitle">Empowering education, governance, and workforce through cutting-edge digital solutions.</p>
        </div>
        <div className="hkcl-sc__grid">
          {services.map((s, i) => (
            <Link
              to={s.link}
              key={i}
              className="hkcl-sc__card"
              style={{ '--card-color': s.color, '--card-bg': s.bg }}
            >
              <div className="hkcl-sc__card-icon">{s.icon}</div>
              <h3 className="hkcl-sc__card-title">{s.title}</h3>
              <p className="hkcl-sc__card-desc">{s.desc}</p>
              <span className="hkcl-sc__card-cta">Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
